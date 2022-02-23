import React, { Component } from "react";
import axios from "axios";

class AccountAddComponent extends Component {
  state = {
    accountNumber : "",
    customerName : "",
    currentAddress : "",
    currentBalance : ""
  };

  onNumberChange = e => {
    this.setState({
        accountNumber : e.target.value
    });
  };

  onNameChange = e => {
    this.setState({
      customerName : e.target.value
    });
  };

  onAddressChange = e => {
    this.setState({
      currentAddress : e.target.value
    });
  };

  onBalanceChange = e => {
    this.setState({
      currentBalance : e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      accountNumber : this.state.accountNumber,
      customerName : this.state.customerName,
      currentAddress : this.state.currentAddress,
      currentBalance : this.state.currentBalance
    };
    axios
      .post("https://localhost:5001/api/Student/AddStudent", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="AccountAddComponent">
        <form className="AccountAddComponent" onSubmit={this.handleSubmit}>
          <input
            placeholder="Account Number" value={this.state.accountNumber}
            onChange={this.onNumberChange} required />
            <br/>

            <input
            placeholder="Customer Name" value={this.state.customerName}
            onChange={this.onNameChange} required />
            <br/>

            <input
            placeholder="Address" value={this.state.currentAddress}
            onChange={this.onAddressChange} required />
            <br/>

            <input
            placeholder="Balance" value={this.state.currentBalance}
            onChange={this.onBalanceChange} required/>
            <br/>

          <button type="submit">Add Student </button>
        </form>
      </div>
    );
  }
}

export default AccountAddComponent;