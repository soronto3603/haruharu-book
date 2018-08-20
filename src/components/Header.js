import React, { Component } from 'react';

class Header extends Component {
  render() {
    const style={
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontSize:'12px',
      position:'fixed',
      width:'100%',
      top:'0px',
      left:'0px'
    };
    const topmargin={
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontSize:'12px',
    }

    return (
      <div>
        <div style={style}>
        {this.props.title}
        </div>
        <div style={topmargin}>
        {this.props.title}
        </div>
      </div>
    );
  }
}

export default Header;
