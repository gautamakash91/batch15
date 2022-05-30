import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userName: ""
    }
  }

  getUsers = () => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((resJson) => {
        this.setState({
          users: resJson.data
        })
      })
  }

  createUser = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.userName,
        job: 'Developer'
      })
    })
    .then((res)=> res.json())
    .then((resJson)=>{
      console.log(resJson)
    })
  }

  render() {
    return (
      <div>
        hello Fetcher
        <button onClick={this.getUsers}>get users</button>
        <button onClick={this.createUser}>create users</button>
      </div>
    )
  }
}

//ASSIGNMENT
//PART 1: save the response of get users to a users array. Map the users on the screen and show their first_name and last_name
//PART 2: create a form to take the name and job of the user and pass that value to the create users API. 
