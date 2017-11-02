import React, { Component } from 'react';
import Home from './scenes/home';
import Feed from './scenes/feed';

export default class App extends Component {
  render() {
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case '/':
        return <Home/>;
      case '/feed' || '/feed/':
        return <Feed/>;
      default:
        return <Home/>;
    }
  }
}

