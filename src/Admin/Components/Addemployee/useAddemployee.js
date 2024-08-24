import { useEffect, useState } from "react"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router";

const useAddEmployee = () => {
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])


  const formik = useFormik({
    initialValues: {
      employeeName: '',
      employeeEmail: '',
      employeePhone: '',
      employeePosition: '',
      employeeSalary: '',
    },
    validationSchema: Yup.object({
      employeeName: Yup.string().required('Name is required'),
      employeeEmail: Yup.string().email('Invalid email').required('Email is required'),
      employeePhone: Yup.string().required('Phone number is required'),
      employeePosition: Yup.string().required('Position is required'),
      employeeSalary: Yup.number().required('Salary is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const newEmployee = {
        name: values.employeeName,
        email: values.employeeEmail,
        phone: values.employeePhone,
        position: values.employeePosition,
        salary: values.employeeSalary,
      };

      try {
        const response = await fetch('http://localhost:4000/api/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEmployee),
        });

        if (response.ok) {
          alert('Employee added successfully');
          formik.resetForm()
          navigate('/manage-employe')

        } else {
          alert('Failed to add employee');
        }
      } catch (error) {
        alert('Error submitting the form');
      } finally {
        setLoading(false);
      }
    },
  });

  return { loading, formik }
}

export default useAddEmployee