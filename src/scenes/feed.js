import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title text={'FEED'} />
        <a
          onClick={e => {
            this.props.navigation.navigate('/')
            e.preventDefault()
          }}
        >
          Home
        </a>
      </View>
    )
  }
}
