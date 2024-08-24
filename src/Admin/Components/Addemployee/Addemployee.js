import React from 'react'
import { BeatLoader } from 'react-spinners'
import useAddEmployee from './useAddemployee'
import './Addemployee.css'

const AddEmployee = () => {


  const {loading, formik} = useAddEmployee();

  if (loading) {
    return (
      <>
        <div className='loading'
          style={{
            width: '100%',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: "10px",
            boxShadow: "0 0 2px 0 rgba(145, 158, 171, .3), 0 12px 24px -4px rgba(145, 158, 171, .12)",
          }}>
          <BeatLoader />
        </div>
      </>
    )
  }

  return (
    <section id="add-employee-form">
        
        
        <div className='main-content'>
                <h1>Add Employee Form</h1>
                <p>Add your Employee from here!</p>
            </div>


        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type="text"
                    name="employeeName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.employeeName}
                    placeholder='Enter Employee Name'
                />
                {formik.touched.employeeName && formik.errors.employeeName ? (
                    <div className="error">{formik.errors.employeeName}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="email"
                    name="employeeEmail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.employeeEmail}
                    placeholder='Enter Employee Email'
                />
                {formik.touched.employeeEmail && formik.errors.employeeEmail ? (
                    <div className="error">{formik.errors.employeeEmail}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="text"
                    name="employeePhone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.employeePhone}
                    placeholder='Enter Employee Phone'
                />
                {formik.touched.employeePhone && formik.errors.employeePhone ? (
                    <div className="error">{formik.errors.employeePhone}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="text"
                    name="employeePosition"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.employeePosition}
                    placeholder='Enter Employee Position'
                />
                {formik.touched.employeePosition && formik.errors.employeePosition ? (
                    <div className="error">{formik.errors.employeePosition}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="number"
                    name="employeeSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.employeeSalary}
                    placeholder='Enter Employee Salary'
                />
                {formik.touched.employeeSalary && formik.errors.employeeSalary ? (
                    <div className="error">{formik.errors.employeeSalary}</div>
                ) : null}
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Add Employee'}
            </button>
        </form>
    </section>
);
}

export default AddEmployee;