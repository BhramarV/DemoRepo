import Axios from "axios";
import React from "react";
import { useState } from "react";

export default function Stockexchange() {
    var [price, setPrice] = useState(0);
    React.useEffect(() => {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            price = response.data.data;
            setPrice(price);
        })
    })
    return (<div>
        <h1>Current Price:{price.pricecurrent}</h1>
    </div>)
}

