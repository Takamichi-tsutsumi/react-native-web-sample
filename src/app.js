import { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.object.isRequired
  }

  static childContextTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      location: this.props.history.location,
      history: this.props.history
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}
