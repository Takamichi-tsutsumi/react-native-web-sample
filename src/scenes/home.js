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
  state = {
    users: [],
  }

  render() {
    return <View style={styles.container}>
      <Title text={"USER REGISTER FORM"} />
      <a onClick={e => {
        this.props.navigation.navigate("/feed");
        e.preventDefault();
      }}>
      Feed
    </a>
    <UserForm onSubmit={val => this.setState({
      users: [val, ...this.state.users]
    })} />
      <UserList users={this.state.users} />
      </View>;
  }
}

