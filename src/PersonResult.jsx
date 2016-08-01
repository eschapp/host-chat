import React, { Component } from 'react';

import {Row, Col, Button} from 'elemental';

export default class PersonResult extends Component {
  render() {
    return (
      <div style={{
        borderBottom: '2px solid #dedede',
        marginBottom: '20px'
      }}>
        <Row>
          <Col sm="1/3">
            <div style={{
              maxWidth: 200,
              height: 200,
              backgroundColor: '#dedede'
            }}>
              Image here
            </div>
          </Col>
          <Col sm="2/3">
            <Row>
              <Col>
                <h2>{this.props.name}</h2>
                {this.props.email}
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Hobbies</strong><br />
                {this.props.hobbies}
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
                <Button type="hollow-primary" size="sm" href="http://lmgtfy.com">Map</Button>
                <Button type="hollow-success" size="sm">Drink</Button>
              </Col>
            </Row>
          </Col>
        </Row>


        {/*
        Email:
        Hobbies: .
        Postal code: 10005*/}
      </div>
    );
  }
}
