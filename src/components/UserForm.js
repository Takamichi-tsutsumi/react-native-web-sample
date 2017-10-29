import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { withFormik } from 'formik';
import yup from 'yup';
import Button from './Button';
import colors from './colors';

const styles = StyleSheet.create({
  textInput: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: colors.lightgray,
    borderRadius: '4px',
    margin: '8px',
    padding: '8px',
    color: colors.black
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
});


const Form = ({ handleSubmit, handleBlur, setFieldValue, touched, errors, values }) => {
  return (
    <View>
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
      {
        touched.name
          && errors.name
          && <Text style={styles.inputErrorText}>{ errors.name }</Text>
      }
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
        {
          touched.email &&
            errors.email &&
            <Text style={styles.inputErrorText}>{ errors.email }</Text>
        }
        <Button title={'ADD TO LIST'} onPress={handleSubmit} />
    </View>
  );
}

// validation schema for form client validation
const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
});



const UserForm = withFormik({
  validationSchema,
  handleSubmit: (values, { props }) => props.onSubmit(values),
  mapPropsToValues: props => ({ name: '', email: '' }),
})(Form)

export default UserForm;
