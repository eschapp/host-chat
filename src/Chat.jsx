//Depencecies & Node Packages
import React, {Component} from 'react';
import { Button, Alert, Checkbox, Spinner, Row, Col, Form, FormField, FormInput, FormSelect } from 'elemental';
import Horizon from '@horizon/client';

//Components
import MessageList from './MessageList.jsx';
import VicinityMap from './VicinityMap.jsx';
import {chat} from './stores.jsx';

const chatContainerStyle = {
  backgroundColor: '#fff',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '15px',
  margin: '0 auto',
  width: '50%'
};

// const results = [
//   {
//     name: 'Host',
//     email: 'thehost@gmail.com',
//     postalCode: 55417,
//   },
// ];

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
    chat.watch().subscribe((results) => {
      this.setState({
        messages: results,
      })
    })
  }

  handleNewComment(comment, subject) {
    chat.store({
      messages: comment,
      userName: this.props.params.userName,
    })}

    render() {
      return (
        <div style={chatContainerStyle}>
            <div>
            <h1 style={{textAlign:'center', background:'whitesmoke'}}>Chat with the Host</h1>
              <div>
                <Row style={{margin:'0 0 10px 0'}}>
                  <Col sm="1/2">
                    <div style={{width:'100%',height:200, padding:10,background:'lightgreen', overflow:'hidden'}}>
                      <VicinityMap />
                    </div>
                  </Col>
                  <Col sm="1/2">
                    <div style={{width:'100%',height:200, padding:10, background:'whitesmoke'}}>
                      Host is who?
                    </div>
                  </Col>
                </Row>
              </div>
                  <div style={{background: 'whitesmoke', padding:10, margin:10}}>
                    <Col>
                      <MessageList username={this.props.params.usernName} messages={this.state.messages}/>
                    </Col>
                  </div>
            </div>

            <div style={{ background:'goldenrod', padding:10, margin:10}}>
              <Row>
                <FormInput style={{margin:'0 10px 10px 10px'}} placeholder="Textarea" multiline />
              </Row>
              <Row>
                <FormField>
                  <Checkbox label="Urgent" />
                </FormField>
              </Row>
              <Row>
                <Button style={{margin:'0 10px', float: 'right'}} size="lg" href="">Send New Message</Button>
              </Row>
            </div>

            <div style={{background:'blue', color:'white', height:80, padding:10, margin:10}}>
              <FormField>
                <Checkbox label="Urgent" />
              </FormField>
            </div>

        </div>
        )
    }
  }