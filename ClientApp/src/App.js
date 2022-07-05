import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Contacts} from './components/Contacts';
import { Hobbie } from './components/Hobbie';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Hobbie' component={Hobbie} />
        <Route path='/Contacts' component={Contacts} />
      </Layout>
    );
  }
}
