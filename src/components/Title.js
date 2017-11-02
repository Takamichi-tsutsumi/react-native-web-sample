import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from './colors';

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black
  },
});

const Title = ({ text }) => <View style={styles.titleContainer}>
  <Text style={styles.titleText}>{ text }</Text>
</View>;

export default Title;
