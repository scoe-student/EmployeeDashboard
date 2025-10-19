import React from "react";
import { employees } from "./Data/employeeData";
import Employee from "./Component/employee";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDept: "All"
    };
  }

  // function to handle department filter
  handleFilter = (dept) => {
    this.state.selectedDept !== dept &&
      this.setState({ selectedDept: dept });
  };

  render() {
    const { selectedDept } = this.state;

    // filter employees based on department
    const filteredEmployees =
      selectedDept === "All"
        ? employees
        : employees.filter((emp) => emp.department === selectedDept);

    return (
      <div className="container py-4">
        <h1 className="text-center mb-4 text-white bg-dark p-3 rounded">
          Employee Records Dashboard
        </h1>

        {/* Filter buttons */}
        <div className="d-flex justify-content-center mb-4">
          {["All", "IT", "HR", "Finance", "Marketing"].map((dept) => (
            <button
              key={dept}
              className={`btn mx-2 fw-bold ${
                selectedDept === dept ? "btn-primary" : "btn-outline-dark"
              }`}
              onClick={() => this.handleFilter(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Employee Cards */}
        <div className="row g-4">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <div className="col-12 col-sm-6 col-md-4" key={emp.id}>
                <Employee data={emp} />
              </div>
            ))
          ) : (
            <h4 className="text-center text-danger">
              No employees found in {selectedDept} department.
            </h4>
          )}
        </div>
      </div>
    );
  }
}