import React, { Component } from 'react';
import '../css/contents.css'

import { Link, Route, Switch } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import Home from './Home';
import Lib from './Lib';
import Prof from './Prof';
import Search from './Search';

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
          <Route path="/home" render={<Home asdf={asd} />)/>
          <Route path="/lib" component={Lib}/>
          <Route path="/prof" component={Prof}/>
          <Route path="/search" component={Search}/>
        </div>
        <div style={nav_bar}>
          <Row>
            <Col className="col-3"><Link to="home">Home</Link></Col>
            <Col className="col-3"><Link to="lib">Lib</Link></Col>
            <Col className="col-3"><Link to="prof">Prof</Link></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contents;
