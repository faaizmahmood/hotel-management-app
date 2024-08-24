import React from 'react';
import { BeatLoader } from 'react-spinners';
import useManageEmployee from  './useManageEmploye'
import './ManageEmploye.css'
import { NavLink } from 'react-router-dom';

const ManageEmployee = () => {
  const { loading, employeeData } = useManageEmployee();

  if (loading) {
    return (
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
        }}
      >
        <BeatLoader />
      </div>
    );
  }

  return (
    <section id="manage-employee">
      <div className='main-content'>
        <h1>Manage Employees</h1>
        <p>Add or view employees from here!</p>
      </div>

      <NavLink to='/add-employee'><button>Add New Employee</button></NavLink>

      <div className='employees'>
        {employeeData?.length === 0 ? ( // Optional chaining to avoid errors
          <h1>No Employees Available</h1>
        ) : (
          employeeData?.map((employee) => (
            <div className='employee-card' key={employee.id}>
              <img src='./images/profile-img.png' alt='Profile' />
              <h1 className='text-center mt-3'>{employee.name}</h1>
              <p>{employee.email}</p>
              <p>{employee.phone}</p>
              <p>Position: <b>{employee.position}</b></p>
              <p>Salary: <b>{employee.salary}</b></p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ManageEmployee;
