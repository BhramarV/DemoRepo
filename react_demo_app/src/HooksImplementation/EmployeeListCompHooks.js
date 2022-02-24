import EmployeeDetailsComponent from "../components/UserDetailsComponent"
import Axios from "axios";
import React from "react";
import { useState } from "react";

export default function EmployeeListCompHooks() {
    var [employeeList, setEmployeeList] = useState([]);
    React.useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Student/AllStudents");
        dataPromise.then((response) => {
            // employeeList = response.data;
            setEmployeeList(response.data);
        })
    })
    return (
        // {/* {this.state.employeeList.map((employee) => {
            // return <EmployeeDetailsComponent key={employee.accountNumber} {...employee} ></EmployeeDetailsComponent>
        // })} */}
        < div >
        {/* <h1>Employee List is given Below:</h1> */}
        {
            employeeList.map((employee) => {
            return <EmployeeDetailsComponent key={employee.accountNumber} {...employee} ></EmployeeDetailsComponent>
            })
        }
    </div>
    )
}