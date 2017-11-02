import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
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
  }

  render() {
    return <View style={styles.container}>
      <Title text={'USER REGISTER FORM'}/>
      <UserForm
        onSubmit={(val) => this.setState({users: [val, ...this.state.users]})}
      />
      <UserList users={this.state.users} />
    </View>;
  }
}

