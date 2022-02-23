import React from 'react';
import Axios from 'axios';
import AccountDetailsComponent from "./AccountDetailsComponent"

export default class AccountListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <AccountDetailsComponent key={employee.id} {...employee}></AccountDetailsComponent>
                })}
            </div>
        )
    }

    componentDidMount() {
        var dataPromise = Axios.get("https://localhost:5001/api/Student/AllStudents");
        // Axios.delete("/api/Student/DeleteAccount/{accountNumber}");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
        debugger;
    }
}