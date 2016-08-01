
  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import globalStyles from './assets/styles/global.css';
  import elementalStyles from '../node_modules/elemental/less/elemental.less';

  import { StyleSheet, css } from 'aphrodite';

  import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
  import PersonResult from './PersonResult.jsx';

  const styles = StyleSheet.create({
    emergency: {
      ':hover': {
        backgroundColor: 'red',
        color: 'white'
      }
    }
  });

  const containerStyle = {
    backgroundColor: '#fff',
    border: '2px solid #dedede',
    borderRadius: '0.3em',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '15px',
    marginBottom: '25px'
  };

  const resultsContainerStyle = {
    backgroundColor: '#fff',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '15px',
    marginBottom: '25px'
  };

  const results = [
    {
      name: 'Tommy Boy',
      email: 'tommy@gmail.com',
      postalCode: 10005,
      hobbies: 'Drinking, ripping coats, travel, row boats'
    },
    {
      name: 'Hunter Hawes',
      email: 'hunterhawes13@gmail.com',
      postalCode: 55318,
      hobbies: 'Music, computers, Vikings'
    }
  ];

  class App extends Component {
    render() {
      return (
        <div>
          <div style={{
            maxWidth: '768px',
            // backgroundColor: '#dedede',
            padding: '20px 40px',
            margin: '30px auto'
          }}>
            <h1>Welcome</h1>
            <div style={containerStyle}>
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
                  <Col sm="2/3">
                    <Alert type="info">Errors and success messages</Alert>
                  </Col>
                  <Col sm="1/3" style={{textAlign:'right'}}>
                    <Button size="lg" href="http://lmgtfy.com">Large Button</Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <div style={resultsContainerStyle}>
              {results.map((person) => {
                return (
                  <PersonResult name={person.name} email={person.email} postalCode={person.postalCode} hobbies={person.hobbies} />
                )
              })}
            </div>
            <input type="button" value="Click me" className={css(styles.emergency)} />
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
