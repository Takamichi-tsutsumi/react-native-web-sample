import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    margin: '8px',
    borderStyle: 'solid',
    borderColor: colors.yellow,
    borderWidth: '2px',
    borderRadius: '8px'
  },
  buttonText: {
    color: colors.yellow,
    fontWeight: 'bold'
  }
})

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button
