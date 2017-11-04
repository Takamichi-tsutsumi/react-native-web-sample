import { Component } from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object,
  }

  getChildContext() {
    return { location: this.props.history.location, history: this.props.history, match: this.state.match };
  }

  state = {
    match: matchPath('/', {path: this.props.history.location.pathname, isExact: true}),
  }

  componentWillMount() {
    const { history } = this.props

    this.unlisten = history.listen(() => {
      this.setState({
        match: matchPath('/', {path: history.location.pathname, isExact: true})
      })
    })
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
