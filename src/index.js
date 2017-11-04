import React from 'react';
import { AppRegistry } from 'react-native'
import createHistory from 'history/createBrowserHistory'
import App from './app';
import Home from './scenes/home';
import Feed from './scenes/feed';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createHistory();

const Root = props => (
  <App history={history}>
    <Home />
    <Feed />
  </App>
);


// App registration and rendering
AppRegistry.registerComponent("MyApp", () => Root);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') });

// Register ServiceWorker
registerServiceWorker();
