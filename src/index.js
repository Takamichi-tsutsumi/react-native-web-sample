import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import registerServiceWorker from './registerServiceWorker';

const colors = {
  pink: '#FFAAA5',
  lime: '#DCEDC1',
  yellow: '#FDCF58',
  gray: '#757676',
  lightgray: '#D5D5D5',
  black: '3A3B3B'
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'lightgray',
    borderRadius: '4px',
    margin: '8px',
    padding: '8px'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    margin: '8px',
    borderStyle: 'solid',
    borderColor: colors.yellow,
    borderWidth: '2px',
    borderRadius: '8px',
  },
  buttonText: {
    color: colors.yellow,
    fontWeight: 'bold',
  }
});


// Components
class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  render() {
    return <View style={styles.container}>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(val) => this.setState({users: [val, ...this.state.users]})}
        render={props => <View>
            <TextInput
              name={'name'}
              placeholder={'Name'}
              style={styles.textInput}
              onChangeText={(text) => props.setFieldValue('name', text)}
            />
            <TextInput
              name={'email'}
              placeholder={'Email'}
              style={styles.textInput}
              onChangeText={(text) => props.setFieldValue('email', text)}
            />
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={styles.button}
            >
              <Text style={styles.buttonText}>ADD TO LIST</Text>
            </TouchableOpacity>
          </View>
        }
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
