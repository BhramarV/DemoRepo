import React, { Component } from 'react';
// import FormChild from './FormChild';
import App from ".././components/UserListComponent.js";
import userList from ".././data/userList.js";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      formtext: "",
      data: userList,
      update: userList
    }
  }

  handleChange(event) {
    debugger;
    this.state.formtext = event.target.value;
    if (this.state.formtext === "" && this.state.formtext === " "){
      this.state.data = userList;
    }
    else {
      this.setState({
        updata: this.state.data.filter((user) => {
          return user.id.startsWith(this.state.formtext)
        })
      });
    }
  }

    render() {
    return (
      <div>
        <label>Enter id</label>
        {/* <input id='formtext' onChange={(event) => this.handleChange(event)} /> */}
        <input id='formtext' onKeyUp={(event) => this.handleChange(event)} />
        <br />
        <p>The name entered is {this.state.formtext}</p>

        <App detail={this.state.updata}> </App>
      </div>
    )
    debugger;
  }
}

export default Form;