/* @flow */
import React, { Component } from 'react';
import history from './history';
import match from './match';

const StackNavigator = (routeConfigs: {}) => {
  const getScreenForRoute = (pathname: string, name: ?string) => {
    if (name) {
      return routeConfigs[name].screen;
    }

    for (const key: string of Object.keys(routeConfigs)) {
      if (match(pathname, routeConfigs[key].path)) {
        return routeConfigs[key].screen;
      }
    }

    throw new Error(`No Screen matches for the path. ${pathname}`);
  };

  class Navigator extends Component<{}> {
    transition: Function;
    history: {};

    history = history;

    constructor(): void {
      super();

      this.transition = this.transition.bind(this);
    }

    transition(path: string): void {
      this.history.push(path);
    }

    componentWillMount(): void {
      this.history.listen((e: {}): void => {
        this.forceUpdate();
      });
    }

    render() {
      return React.createElement(
        getScreenForRoute(this.history.location.pathname),
        { navigation: { navigate: this.transition } },
        null,
      );
    }
  }

  return Navigator;
};

export default StackNavigator;
