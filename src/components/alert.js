import React from "react";

export default class Alerts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleName = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    if(this.state.email === ""){
      alert("please enter email");
    } else if(this.state.password === ""){
      alert("please enter password");
    } else {
      if(this.state.email === "akash@gmail.com" && this.state.password === "Pass"){
        alert("login successful");
      }else{
        alert("login failed");
      }
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="enter email"
          onChange={this.handleName}
        />

        <input
          placeholder="enter password"
          onChange={this.handlePassword}
        />

        <button onClick={this.login}>login</button>
      </div>
    )
  }
}