import React, { Component } from 'react';

class Header extends Component {
  render() {
    const style={
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontSize:'12px',
      position:'fixed',
      top:'0px',
      left:'0px'
    };
    return (
      <div style={style}>
      Header
      </div>
    );
  }
}

export default Header;
