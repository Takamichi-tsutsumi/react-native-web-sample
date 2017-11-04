import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native'
import { matchPath } from 'react-router';
import { Title } from '../components';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});


export default class Feed extends Component {
  static contextTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  state = {
    items: [],
    match:  matchPath('/feed', {path: this.context.history.location.pathname, isExact: true})
  }

  componentWillMount() {
    const { history } = this.context

    this.unlisten = history.listen((e) => {
      console.log(e)
      console.log(this.context);
      this.setState({
        match: matchPath('/feed', {path: this.context.history.location.pathname, isExact: true})
      })
    })
  }

  render() {
    return this.state.match ? <View style={styles.container}>
      <Title text={'FEED'}/>
        <a onClick={e => {
            this.context.history.replace("/home");
            e.preventDefault();
          }}>
          Home
        </a>
    </View> : null;
  }
}

