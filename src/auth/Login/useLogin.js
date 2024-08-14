import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { UserTypeContext } from '../../ReduxStore/store';
import { useContext } from 'react';

const useLogin = () => {
  const { setLoggedInUserType } = useContext(UserTypeContext)
  const navigate = useNavigate();


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

  const LoginData = [
    {
      email: "arslanzafar3777018@gmail.com",
      password: "12345678",
      userType: "user",
    },
  ];

  const initialValues = {
    email: '',
    password: '',
    userType: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const userFound = LoginData.find(
        (obj) =>
          obj.email === values.email &&
          obj.password === values.password &&
          obj.userType === values.userType
      );
      if (userFound) {
        setLoggedInUserType(userFound.userType);
        if (userFound.userType === 'admin') {
          navigate('/');
        } else if (userFound.userType === 'user') {
          navigate('/user-dashBoard');
        }
      } else {
        alert("User not Found!")
      }
    },
  });

  return { formik };
};

export default useLogin;