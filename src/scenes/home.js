import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import createBrowserHistory from 'history/createBrowserHistory';
import { UserForm, UserList, Title } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});


export default class Home extends Component {
  constructor() {
    super();
    this.state = { users: [] };

    this.history = createBrowserHistory();
    this.history.listen((location, action) => {
      console.info(location, action);
    });
  }

  render() {
    return <View style={styles.container}>
      <Title text={'USER REGISTER FORM'}/>
      {
        // <a onClick={(e) => { this.history.replace('/feed'); e.preventDefault(); }}>Feed</a>
      }
      <a href='/feed'>Feed</a>
      <UserForm
        onSubmit={(val) => this.setState({users: [val, ...this.state.users]})}
      />
      <UserList users={this.state.users} />
    </View>;
  }
}

