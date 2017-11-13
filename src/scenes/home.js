import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Media from 'react-responsive'
import { UserForm, UserList, Title } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})

export default class Home extends Component {
  state = {
    users: []
  }

  render() {
    return (
      <View style={styles.container}>
        <Title text={'USER REGISTER FORM'} />
        <a
          onClick={e => {
            this.props.navigation.navigate('/feed')
            e.preventDefault()
          }}
        >
          Feed
        </a>
        <Media query="(orientation: portrait)">
          <UserForm
            onSubmit={val =>
              this.setState({
                users: [val, ...this.state.users]
              })}
          />
          <UserList users={this.state.users} />
        </Media>
        <Media query="(orientation: landscape)">
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <UserForm
                onSubmit={val =>
                  this.setState({
                    users: [val, ...this.state.users]
                  })}
              />
            </View>
            <View style={{ flex: 1 }}>
              <UserList users={this.state.users} />
            </View>
          </View>
        </Media>
      </View>
    )
  }
}
