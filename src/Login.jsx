//Depencecies & Node Packages
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormSelect } from 'elemental';

//Components
import VicinityMap from './VicinityMap.jsx';

const loginStyle = {
  backgroundColor: '#fff',
  border: '2px solid #dedede',
  borderRadius: '0.3em',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '15px',
  margin: '0 auto 25px auto',
  width: '50%'
};

var timeline = [{'label': 'Today', 'value': 'TODAY!!!'}, {'label': 'Tomorrow', 'value':'Right?!'}]

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:"",
      userEmail:"",
      userPostalCode:"",
      timeline:""
    }
  }

  handleNameChange(e) {
    this.setState({userName: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({userEmail: e.target.value});
  }

  handlePostCodeChange(e) {
    this.setState({userPostalCode: e.target.value});
  }
  handleTimelineSelect(timeline) {
    this.setState({userTimeline: timeline});
  }

  onLoginSubmit(e) {
    e.preventDefault()
    browserHistory.push('/chat')
  }

    render() {
      return (
        <div>
          <h1 style={{textAlign:'center'}}>Host Chat</h1>
          <div style={loginStyle}>
            <div style={{ margin:'0 0 15px 0'}}>
              <div style={{width:'100%',height:'200px',background:'lightgreen', overflow:'hidden'}}>
                <VicinityMap />
              </div>
              <div style={{height:50,background:'green'}}>
                Host Info/Post Info
              </div>
            </div>
            <Form onSubmit={this.onLoginSubmit.bind(this)} type="inline">
              <Row>
                <Col sm="1/3">
                  <FormField label="Name" htmlFor="inline-form-input-text">
                    <FormInput onChange={this.handleNameChange.bind(this)} type="text" placeholder="Enter name" name="inline-form-input-text" />
                  </FormField>
                </Col>
                <Col sm="1/3">
                  <FormField label="Email address" htmlFor="inline-form-input-email">
                    <FormInput onChange={this.handleEmailChange.bind(this)} type="email" placeholder="Enter email" name="inline-form-input-email" />
                  </FormField>
                </Col>
                <Col sm="1/3">
                  <FormField label="Postal code" htmlFor="postal-code">
                    <FormInput onChange={this.handlePostCodeChange.bind(this)} type="text" placeholder="Postal code" name="postal-code" />
                  </FormField>
                </Col>
              </Row>
              <Row>
              <h4 style={{display:'block', margin:'0 0 5px 10px'}}>Let Us know your level of interest in this location:</h4>
              </Row>
              <Row>
                <FormField label="timeline">
                <FormSelect style={{width:250, margin:'0 0 10px 10px'}} options={timeline} firstOption="Select" onChange={this.handleTimelineSelect.bind(this)} />
                </FormField>
              </Row>
              <Row>
                <Col style={{textAlign:'Center', margin: '0 0 10px 0'}}>
                  <Button size="lg" href={"chat"} submit >Chat with the Host</Button>
                </Col>
              </Row>
            </Form>
          </div>
          </div>
          )
    }
  };