import React from "react";

export default class Child extends React.Component{
  
  render(){
    console.log(this.props);
    return(
      <div>
        hi from child comp

        <button onClick={this.props.showUserLayout}>click here</button>
      </div>
    )
  }
}