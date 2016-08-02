//Depencecies & Node Packages
import React, {Component} from 'react';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';


const chatContainerStyle = {
  backgroundColor: '#fff',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '15px',
  margin: '0 auto',
  width: '50%'
};

const results = [
  {
    name: 'Host',
    email: 'thehost@gmail.com',
    postalCode: 55417,
  },
];

export default class Chat extends Component {
    render() {
      return (
        <div style={chatContainerStyle}>
            <div>
            <h1 style={{textAlign:'center', background:'whitesmoke'}}>Chat with the Host</h1>
              <div>
                <Row style={{margin:'0 0 10px 0'}}>
                  <Col sm="1/2">
                    <div style={{width:'100%',height:200, padding:10,background:'lightgreen'}}>
                      Hey a map
                    </div>
                  </Col>
                  <Col sm="1/2">
                    <div style={{width:'100%',height:200, padding:10, background:'whitesmoke'}}>
                      Host says what?
                    </div>
                  </Col>
                </Row>
              </div>
              {results.map((host) => {
                return (
                  <div style={{background: 'whitesmoke', padding:10, margin:10}}>
                    <Col>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                      <Row>Chat chaty chat</Row>
                    </Col>
                  </div>
                )
              })}
            </div>

            <div style={{height:200, background:'goldenrod', padding:10, margin:10}}>
                <FormInput placeholder="Textarea" multiline />
            </div>

            <div style={{background:'blue', color:'white', height:80, padding:10, margin:10}}>
              <Button style={{float: 'right'}} size="lg" href="">Send New Message</Button>
            </div>

        </div>
        )
    }
  }