import { useState, useEffect } from 'react';
import axios from 'axios';
import PutHook from './AccountApiPutWithHooks';
import AccountDetailsComponent from '../classComponent/AccountDetailsComponent';

export default function GetHook() {
    var [accountdetail, setAccountDetail] = useState([]);
    // var [accountNumber, setNumber] = useState("");
    // debugger;

    useEffect(() => {
        var dataPromise = axios.get("https://localhost:5001/api/Student/AllStudents");
        dataPromise.then((response) => {
            // debugger;
            setAccountDetail(response.data);
            // debugger;
        })
    }, [])
    // }, [])

    return (
        <div>      
            {
                accountdetail.map((employee) => {
                    return <AccountDetailsComponent key={employee.accountNumber} detail = {employee} ></AccountDetailsComponent>
                })
            }
        </div>
    )
}