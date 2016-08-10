//Depencecies & Node Packages
  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import globalStyles from './assets/styles/global.css';
  import elementalStyles from '../node_modules/elemental/less/elemental.less';
  import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
  import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
  import Horizon from '@horizon/client';
//Components
  import Login from './Login.jsx';
  import Chat from './Chat.jsx';
  import NoMatch from './NoMatch.jsx';
  import MessageList from './MessageList.jsx';
  import {chat} from './stores.jsx';


  class App extends Component {
    render() {
      return (
        <div>
        {this.props.children}
        </div>
        )
    }
  }

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="chat" component={Chat} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>,
  document.getElementById('root')
);
