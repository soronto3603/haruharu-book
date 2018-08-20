import React, { Component } from 'react';
import '../css/lib.css'

import { Container, Row, Col } from 'react-grid-system';

class Lib extends React.Component {
    render() {
        return (
            <Container fluid>
              <Row>
                <Col md={4}>asd</Col>
                <Col md={8}>dfg</Col>
              </Row>
            </Container>
        );
    }
}

export default Lib;
