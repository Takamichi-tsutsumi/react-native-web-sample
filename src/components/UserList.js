import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import colors from './colors';

const styles = StyleSheet.create({
  userListContainer: {
    padding: '12px',
  },
  listItem: {
    padding: '12px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: colors.lightgray,
  }
});

const UserList = ({ users }) => {
  return <ScrollView style={styles.userListContainer}>
    {
      users.map(user => {
        return <View key={user.name} style={styles.listItem}>
          <Text>{`${user.name}  ${user.email}  ${user.date}`}</Text>
        </View>
      })
    }
  </ScrollView>;
};

export default UserList;
