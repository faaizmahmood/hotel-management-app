import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { UserTypeContext } from '../../ReduxStore/store';
import { useContext, useState } from 'react';

const useLogin = () => {
  const { setLoggedInUserType } = useContext(UserTypeContext)

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    userType: Yup.string()
      .oneOf(['user', 'admin'], 'Invalid user type')
      .required('User type is required'),
  });

  const initialValues = {
    email: '',
    password: '',
    userType: '',
  };


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const userData = new FormData();
      userData.append("Email", values.email);
      userData.append("Password", values.password);

      try {
        setLoading(true)
        console.log(loading)
        const res = await fetch('http://localhost:4000/api/getusers', {
          method: 'POST',
          body: userData
        });

        const data = await res.json();
        console.log(data)

        if (!res.ok) {
          if (res.status === 401) {
            alert('Invalid credentials');
          } else if (res.status === 404) {
            alert('User not found....');
          } else {
            alert('An error occurred');
          }
          return
        }


        // const data = await res.json();

        console.log(data)

        setLoggedInUserType(data.role);
        setLoading(false)
        if (data.role === 'admin') {
          navigate('/');
        } else if (data.role === 'user') {
          navigate('/user-dashboard');
        }
      } catch (error) {
        setLoading(false)
        alert("Failed to connect to server");
      }
    },

  })

  return { formik, loading };
};

export default useLogin;