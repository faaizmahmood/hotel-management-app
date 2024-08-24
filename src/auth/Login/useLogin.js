import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { UserTypeContext } from '../../ReduxStore/store';

const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [startLoading, setStartLoading] = useState(true);
  const { loggedInUser, setLoggedInUser } = useContext(UserTypeContext);

  useEffect(() => {
    console.log("loggedInUser", loggedInUser);
    if (loggedInUser && loggedInUser.usertype) {
      if (loggedInUser.usertype === "admin") {
        navigate('/');
      } else if (loggedInUser.usertype === "user") {
        navigate('/user-dashboard');
      }
    }
  }, [loggedInUser, navigate]);

  useEffect(() => {
    setTimeout(() => {
      setStartLoading(false);
    }, 1000);
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const userData = {
        Email: values.email,
        Password: values.password,
      };

      try {
        setLoading(true);
        const res = await fetch('http://localhost:4000/api/getusers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!res.ok) {
          if (res.status === 401) {
            alert('Invalid credentials');
          } else if (res.status === 404) {
            alert('User not found.');
          } else {
            alert('An error occurred.');
          }
          setLoading(false);
          return;
        }

        const data = await res.json();
        setLoading(false);

        localStorage.setItem('currentUser', JSON.stringify(data.user));
        setLoggedInUser(data.user); // Update context

        if (data.user.usertype === 'admin') {
          navigate('/');
        } else if (data.user.usertype === 'user') {
          navigate('/user-dashboard');
        }
      } catch (error) {
        setLoading(false);
        console.error("Error:", error);
        alert("Failed to connect to server");
      }
    },
  });

  return { formik, loading, startLoading };
};

export default useLogin;
