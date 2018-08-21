import React, { Component } from 'react';

class InputForm extends React.Component{
  constructor(props){
    super(props);
    this.state={value:''};

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('A name was submitted: '+this.state.value);
    event.preventDefault();

    this.props.onCreate(this.state);

    this.setState({
      value:''
    });
  }
  render(){
    const input_style={
      borderRadius:"15px",
      width:"80%",
      margin:"10px"
    }
    const button_style={
      backgroundColor:"black",
      color:"White",
      border:"none",
      borderRadius:"5px",
      padding:"5px"
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <center>
          <input style={input_style} type="text" value={this.state.value} onChange={this.handleChange} />
          <input style={button_style} type="submit" value="Submit" />
        </center>
      </form>
    );
  }
}

export default InputForm;
