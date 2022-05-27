import React from "react";
import "./arrays.css";

export default class Arrays extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Akash",
          city: "Bangalore"
        },
        {
          name: "Sritam",
          city: "Bhubaneswar"
        }
      ],
      a: "Nextstacks"
    }
  }

  showUserLayout = (single_user, index) => {
    return (
      <div className="user-container">
        {index} - {single_user.name} - {single_user.city}
        <button onClick={()=>{ this.handleDelete(index)}}>X</button>
      </div>
    )
  }

  handleDelete = (index) => {
    console.log(index);
  }

  handlePush = () => {
    var u = this.state.users;
    u.push({
      name: "Subrajit",
      city: "Bhubaneswar"
    });
    this.setState({
      users: u
    })
  }

  handlePop = () => {
    var u = this.state.users;
    u.pop();
    this.setState({
      users: u
    })
  }

  handleSplice = () => {
    var u = this.state.users;
    u.splice(2, 1);
    this.setState({
      users: u
    })
  }

  render() {
    return (
      <div>
        <input placeholder="enter name" />
        <input placeholder="enter city" />
        <button>add user</button>
        <br />
        {this.state.users.map(this.showUserLayout)}

        <button onClick={this.handlePush}>push</button>
        <button onClick={this.handlePop}>pop</button>
        <button onClick={this.handleSplice}>splice</button>
      </div>
    )
  }
}