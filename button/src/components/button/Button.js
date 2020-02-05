import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
      this.state ={
        button: true
      };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
    this.setState((oldState)=>{
      return{ button:!oldState.button};
    });
    }
  

  render() {
    return (
      <button
         data-testid="button" className={this.state.button ? "untoggled": "toggled"} onClick={this.handleClick}
      >
      {this.props.children ? this.props.children : "Add text!"}
      </button>);                                     
  }

}



export default Button;
