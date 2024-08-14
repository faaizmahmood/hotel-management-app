import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';


const useSignUp = () => {

  const navigate = useNavigate();


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    name : Yup.string().required("Name is required"),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    // userType: Yup.string()
    //   .oneOf(['user', 'admin'], 'Invalid user type')
    //   .required('User type is required'),
  });

  const LoginData = [
    {
      email: "arslanzafar3777018@gmail.com",
      password: "12345678",
    },
  ];

  const initialValues = {
    name:'',
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
          obj.email === values.email
      );
      if (userFound) {
          alert("E-email Found! Sign In")
      } else {
        navigate('/auth-sign-in');
      }
    },
  });

  return { formik };
};

export default useSignUp ;