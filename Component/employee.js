import React from "react";

const Employee = (props) => {
  const { id, name, age, department, designation, salary, location } = props.data;

  return (
    <div className="card shadow-sm my-3">
      <div className="card-body">
        <h5 className="card-title text-primary">{name}</h5>
        <p className="card-text"><strong>ID:</strong> {id}</p>
        <p className="card-text"><strong>Age:</strong> {age}</p>
        <p className="card-text"><strong>Department:</strong> {department}</p>
        <p className="card-text"><strong>Designation:</strong> {designation}</p>
        <p className="card-text"><strong>Salary:</strong> ₹{salary}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
      </div>
    </div>
  );
};

export default Employee;