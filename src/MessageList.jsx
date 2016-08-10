//Depencecies & Node Packages
import React, {Component} from 'react';
import { Button, Alert, Checkbox, Spinner, Row, Col, Form, FormField, FormInput, FormSelect } from 'elemental';

//Components


export default class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.props.chat.watch().subscribe((result) => {
      this.setState({messages: result});
      })
    }

    render() {

      return (
        <div>
          {this.state.messages.map(function(message){
          return (
            <div key={message.id}>
              {message.author}: {message.text}
            </div>
          );
        })}
        </div>
      );
    }
  }