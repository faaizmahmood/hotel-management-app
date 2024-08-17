import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserTypeContext } from '../../ReduxStore/store';


const useSignUp = () => {

  const navigate = useNavigate();

  const { setLoggedInUserType } = useContext(UserTypeContext)


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    // userType: Yup.string()
    //   .oneOf(['user', 'admin'], 'Invalid user type')
    //   .required('User type is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {


      const userData = new FormData()

      userData.append("Name", values.name)
      userData.append("Email", values.email)
      userData.append("Contact", values.phone)
      userData.append("Password", values.password)
      userData.append(" Role", "user")
      try {
        const res = await fetch("http://localhost:3000/api/adduser", {
          method: 'POST',
          body: userData,
        });

        if (!res.ok) {
          if (res.status === 500) {
            alert("Error occurred while saving user data.")
          } else if (res.status === 500) {
            alert("Error occurred while processing your request.")
          }

          return
        }

        const data = await res.json();

        console.log(data)

        setLoggedInUserType(data.role);
        navigate("/auth-sign-in")

        //   if (data.role === 'admin') {
        //     navigate('/');
        //   } else if (data.role === 'user') {
        //     navigate('/user-dashboard');
        //   }

      } catch (error) {
        alert("Failed to connect to server");
      }


    }


    // const userFound = LoginData.find(
    //   (obj) =>
    //     obj.email === values.email
    // );
    // if (userFound) {
    //     alert("E-email Found! Sign In")
    // } else {
    //   navigate('/auth-sign-in');
    // }
  });

  return { formik };
};

export default useSignUp;