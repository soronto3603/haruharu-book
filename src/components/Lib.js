import React, { Component } from 'react';
import '../css/lib.css'
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import Img from 'react-image'

class Lib extends React.Component {
    render() {
        return (
          <div className="float_btn">
            <Link to="search">+</Link>
          </div>
        );
    }
}

export default Lib;
