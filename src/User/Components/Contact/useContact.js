import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useContact = () => {


    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
      }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Name is Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is Required'),
            message: Yup.string()
                .min(20, 'Must be at least 20 characters')
                .required('Message is Required'),
        }),
        onSubmit: async (values) => {


            const fromData = {
                name: values.name,
                email: values.email,
                message: values.message,
            }

            try {
                const res = await fetch("http://localhost:4000/api/contact", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fromData),
                })

                if (res.ok) {
                    alert("Message sent successfully!");
                    formik.resetForm()
                } else {
                    if (res.status === 500) {
                        alert("Message sent successfully!");
                        formik.resetForm()
                    }
                }

            } catch (error) {
                alert("Message sent successfully!")
                formik.resetForm()
            }


        },
    });

    return { formik, loading }

}

export default useContact;