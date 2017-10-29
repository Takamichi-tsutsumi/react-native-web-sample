import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import yup from 'yup';
import registerServiceWorker from './registerServiceWorker';

const colors = {
  pink: '#FFAAA5',
  lime: '#A5FFB9',
  yellow: '#FFD1A3',
  purple: '#A3A3FF',
  gray: '#757676',
  lightgray: '#D5D5D5',
  black: '#3A3B3B',
  error: '#FFA3A3',
  success: '#A3FFA3',
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
    borderColor: colors.lightgray,
    borderRadius: '4px',
    margin: '8px',
    padding: '8px'
  },
  inputError: {
    borderColor: colors.error,
  },
  inputSuccess: {
    borderColor: colors.success,
  },
  inputErrorText: {
    color: colors.error,
    fontSize: 10,
    paddingHorizontal: '10px',
    marginBottom: '8px',
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

// validation schema for form client validation
const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
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
        onSubmit={(val) => {
          this.setState({users: [val, ...this.state.users]});
          console.log(val);
        }}
        validationSchema={userSchema}
    render={({ handleSubmit, handleBlur, setFieldValue, touched, errors, values }) => {
      console.log(touched)
      console.log(errors)

          return <View>
            <TextInput
              name={'name'}
              placeholder={'Name'}
              style={[styles.textInput,
                touched.name && errors.name ?
                  styles.inputError :
                  touched.name && styles.inputSuccess
              ]}
              onChangeText={(text) => setFieldValue('name', text)}
              onBlur={handleBlur}
            />
            { touched.name && errors.name && <Text style={styles.inputErrorText}>{ errors.name }</Text> }
            <TextInput
              name={'email'}
              placeholder={'Email'}
              style={[styles.textInput,
                touched.email && errors.email ?
                  styles.inputError :
                  touched.email && styles.inputSuccess
              ]}
              onChangeText={(text) => setFieldValue('email', text)}
              onBlur={handleBlur}
            />
            { touched.email && errors.email && <Text style={styles.inputErrorText}>{ errors.email }</Text> }
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.button}
            >
              <Text style={styles.buttonText}>ADD TO LIST</Text>
            </TouchableOpacity>
          </View>
        }
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
