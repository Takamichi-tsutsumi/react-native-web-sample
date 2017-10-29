import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import registerServiceWorker from './registerServiceWorker';
import UserForm from './components/UserForm';
import colors from './components/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black
  }
});

const Title = props => <View style={styles.titleContainer}>
  <Text style={styles.titleText}>{ props.text }</Text>
</View>;

// Components
class App extends Component {
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
      <View>{
        this.state.users.map(user => {
          return <View key={user.name}><Text>{`${user.name} ${user.email}`}</Text></View>
        })
      }</View>
    </View>
  }
}

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })

// Register ServiceWorker
registerServiceWorker();
