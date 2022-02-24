import { useState, useEffect } from 'react';
import axios from 'axios';
import PutHook from './AccountApiPutWithHooks';

export default function GetHook() {
    var [counter, setCounter] = useState(0);
    var [accountdetail, setAccountDetail] = useState("");
    debugger;

    useEffect(() => {
        var dataPromise = axios.get("https://localhost:5001/api/Student/StudentById/201");
        dataPromise.then((response) => {
            debugger;
            setAccountDetail(response.data);
            debugger;
        })
    }, [])

    return (
        <div>
            <h1> Your account number is {accountdetail.customerName} </h1>
            <PutHook dataSend = {accountdetail}></PutHook>
        </div>

    )
}