import { AppRegistry } from 'react-native';
import Home from './scenes/home';
import Feed from './scenes/feed';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Navigator } from './Navigation';

const Root = Navigator({
  home: {
    path: '/',
    screen: Home,
  },
  feed: {
    path: '/feed',
    screen: Feed,
  },
});

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => Root);
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root'),
});

// Register ServiceWorker
registerServiceWorker();
