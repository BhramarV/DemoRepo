import React from 'react';
import Axios from 'axios';
import ShareDetailsComponent from "./SBIShareDetailsComponent"

export default class SBIAccountListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
        debugger;
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                return {this.state.employeeList}
                {/* {this.state.employeeList.map((employee) => {
                    return <ShareDetailsComponent {...employee}></ShareDetailsComponent>
                })} */}
            </div>
        )
        debugger;
    }

    componentDidMount() {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })

    }
}