/* @flow */
import React, { Component } from 'react'
import history from './history'
import match from './match'

const StackNavigator = (routeConfigs: {}, navigatorConfig: {}) => {
  const getScreenForRoute = (pathname: string, name: ?string) => {
    if (name) {
      return routeConfigs[name].screen
    }

    for (const key: string of Object.keys(routeConfigs)) {
      if (match(pathname, routeConfigs[key].path)) {
        return routeConfigs[key].screen
      }
    }

    throw new Error(`No Screen matches for the path. ${pathname}`)
  }

  class Navigator extends Component<{}> {
    transition: Function
    transitionBack: Function

    history: {}

    history = history

    constructor(): void {
      super()

      this.transition = this.transition.bind(this)
      this.transitionBack = this.transitionBack.bind(this)
    }

    transition(path: string): void {
      this.history.push(path)
    }

    transitionBack(): void {
      this.history.goBack()
    }

    componentWillMount(): void {
      this.history.listen((e: {}): void => {
        this.forceUpdate()
      })

      const { initialRouteName } = navigatorConfig

      if (initialRouteName && routeConfigs[initialRouteName]) {
        this.transition(routeConfigs[initialRouteName].path)
      }
    }

    render() {
      return React.createElement(
        getScreenForRoute(this.history.location.pathname),
        {
          navigation: { navigate: this.transition, goBack: this.transitionBack }
        },
        null
      )
    }
  }

  return Navigator
}

export default StackNavigator
