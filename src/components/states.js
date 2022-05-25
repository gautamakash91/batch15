import React from "react";
var a = 10;

export default class States extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      a: 20,
      b: 30,
      c: 40
    }
  }

  handleClick = () => {
    this.setState({
      a: 200,
      b: 300,
      c: this.state.a + this.state.b 
    })
  }

  //1. 500
  //2. 200300
  render() {
    return (
      <div>
        the value of state a is: {this.state.a} <br />
        the value of state b is: {this.state.b} <br />
        the value of state c is: {this.state.c} <br />
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}