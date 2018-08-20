import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import Home from './Home';
import Lib from './Lib';
import Prof from './Prof';

class Contents extends Component {
  state={

  }
  render() {
    const nav_bar={
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontSize:'12px',
      position:'fixed',
      width:'100%',
      bottom:'0px',
      left:'0px'
    }
    return (
      <div>
        <div>
          <Route path="/home" component={Home}/>
          <Route path="/lib" component={Lib}/>
          <Route path="/prof" component={Prof}/>
        </div>
        <div style={nav_bar}>
          <Row>
            <Col><Link to="Home">Home</Link></Col>
            <Col><Link to="Lib">Lib</Link></Col>
            <Col><Link to="Prof">Prof</Link></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contents;
