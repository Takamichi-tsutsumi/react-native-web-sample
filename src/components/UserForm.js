import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { withFormik } from 'formik';
import yup from 'yup';
import moment from 'moment';

// react-dates import
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

// custom components
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

// render date picker
const today = moment();
const startDay = moment().subtract(60, 'days');


class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dateInputFocused: false
    };
  }

  render() {
    const {
      handleSubmit,
      handleBlur,
      setFieldValue,
      setFieldTouched,
      touched,
      errors,
      values
    } = this.props;

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
        <SingleDatePicker
          onDateChange={(date) => setFieldValue('date', date.format('YYYY-MM-DD'))}
          onFocusChange={(e) => {
            this.setState({ dateInputFocused: e.focused });
            if (this.state.dateInputFocused)
              setFieldTouched('date', true);
          }}
          focused={this.state.dateInputFocused}
          date={moment(values.date)}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          withPortal
          isOutsideRange={(date) => !date.isBetween(startDay, today, 'days', '[]') }
          required
        />
          <Button title={'ADD TO LIST'} onPress={handleSubmit} />
      </View>
    );
  }
}

// validation schema for form client validation
const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  date: yup.date().required(),
});



const UserForm = withFormik({
  validationSchema,
  handleSubmit: (values, { props }) => props.onSubmit(values),
  mapPropsToValues: props => ({ name: '', email: '', date: moment().format('YYYY-MM-DD') }),
})(Form)

export default UserForm;
