import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Title } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})

export default class Feed extends Component {
  state = {
    items: []
  }

  constructor() {
    super()

    this.loadItems = this.loadItems.bind(this)
  }

  loadItems() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(data => this.setState({ items: data }))
  }

  componentDidMount() {
    this.loadItems()
  }

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
        <a
          onClick={e => {
            this.props.navigation.goBack()
            e.preventDefault()
          }}
        >
          Back
        </a>
        <Text>Item Count: {this.state.items.length}</Text>
      </View>
    )
  }
}
