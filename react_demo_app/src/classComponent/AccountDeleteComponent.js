import { useState, useEffect } from 'react';
import axios from 'axios';
import GetAllAccount from '../HooksImplementation/AccountApiGetWithHooks'

export default function DeleteHook(props) {
    // function deleteEmployee(event) {
        debugger;
        axios.delete("https://localhost:5001/api/Student/DeleteAccount?id=" + props).then(() => {
            debugger;
            alert("Employee is Deleted");
        })
    // }

    return (
        <div>
                {
                    GetAllAccount
                }
            </div>
    )
    debugger;
}