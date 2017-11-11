import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { VictoryBar } from 'victory'
import { Title } from '../components'
import colors from '../components/colors'

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
        <a
          onClick={e => {
            this.props.navigation.goBack()
            e.preventDefault()
          }}
        >
          Back
        </a>
        <VictoryBar
          horizontal
          style={{ data: { fill: colors.pink } }}
          animate={{ duration: 2000, onLoad: { duration: 1000 } }}
        />
      </View>
    )
  }
}
