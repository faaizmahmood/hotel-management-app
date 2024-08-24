import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

const useSignUp = () => {

  const navigate = useNavigate();


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
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
      console.log(formik.errors)

      const userData = {
        Name: values.name,
        Email: values.email,
        Contact: values.phone,
        Password: values.password,
        Role: "user",
        userId: `user-${Date.now()}-${Math.floor(Math.random() * 1e6)}`
      }

      try {
        const res = await fetch("https://solstice-interesting-burrito.glitch.me/api/adduser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (res.status === 400) {
          alert("Email already exists! Try another")
          return
        }

        if (!res.ok) {
          if (res.status === 500) {
            alert("Error occurred while saving user data.")
          } else if (res.status === 500) {
            alert("Error occurred while processing your request.")
          }
          return
        }



        const data = await res.json();

        formik.resetForm()


        navigate("/auth-sign-in")


      } catch (error) {
        alert("Failed to connect to server");
      }


    }

  });

  return { formik };
};

export default useSignUp;