import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const style={
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontSize:'12px',
      position:'fixed',
      width:'100%',
      bottom:'0px',
      left:'0px'
    };
    return (
      <div style={style}>
      Header
      </div>
    );
  }
}

export default Footer;
