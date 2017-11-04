import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})

const NotFound = props => {
  return (
    <View style={styles.container}>
      <Title text={'PAGE NOT FOUND'} />
    </View>
  )
}

export default NotFound
