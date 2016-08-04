//Depencecies & Node Packages
import React, {Component} from 'react';
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

export default class Login extends Component {
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
            <Form type="inline">
              <Row>
                <Col sm="1/3">
                  <FormField label="Email address" htmlFor="inline-form-input-email">
                    <FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />
                  </FormField>
                </Col>
                <Col sm="1/3">
                  <FormField label="Name" htmlFor="inline-form-input-text">
                    <FormInput type="text" placeholder="Enter name" name="inline-form-input-text" />
                  </FormField>
                </Col>
                <Col sm="1/3">
                  <FormField label="Postal code" htmlFor="postal-code">
                    <FormInput type="text" placeholder="Postal code" name="postal-code" />
                  </FormField>
                </Col>
              </Row>
              <Row>
              <h4 style={{display:'block', margin:'0 0 5px 10px'}}>Let Us know your level of interest in this location:</h4>
              </Row>
              <Row>
              <FormSelect style={{width:250, margin:'0 0 10px 10px'}} options={[{'label': 'Today', 'value': 'TODAY!!!'}, {'label': 'Tomorrow', 'value':'Right?!'}]} firstOption="Select" onChange={this.handleSelect} />
              </Row>
              <Row>
                <Col style={{textAlign:'Center', margin: '0 0 10px 0'}}>
                  <Button size="lg" href={"chat"}>Chat with the Host</Button>
                </Col>
              </Row>
            </Form>
          </div>
          </div>
          )
    }
  };