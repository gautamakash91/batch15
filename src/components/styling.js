import React from "react";

export default class Styling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "orange"
    }
  }

  handleClick = () => {
    this.setState({
      a: "purple"
    })
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.a,
            height: 100,
            width: 100
          }}
        >
          hello world
        </div>
        <button onClick={this.handleClick}>change to purple</button>
      </div>
    )
  }
}