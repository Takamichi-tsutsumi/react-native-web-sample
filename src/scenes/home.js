import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native'
import { matchPath } from 'react-router';
import { UserForm, UserList, Title } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default class Home extends Component {
  static contextTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  state = {
    users: [], 
    match:  matchPath('/home', {path: this.context.history.location.pathname, isExact: true})
  }

  componentWillMount() {
    const { history } = this.context
    
    this.unlisten = history.listen((e) => {
      console.log(e)
      console.log(this.context);
      this.setState({
        match: matchPath('/home', {path: this.context.history.location.pathname, isExact: true})
      })
    })
  }

  render() {
    return this.state.match ?  <View style={styles.container}>
        <Title text={"USER REGISTER FORM"} />
        <a onClick={e => {
            this.context.history.replace("/feed");
            e.preventDefault();
          }}>
          Feed
        </a>
        <UserForm onSubmit={val => this.setState({
              users: [val, ...this.state.users]
            })} />
        <UserList users={this.state.users} />
      </View> : null;
  }
}

