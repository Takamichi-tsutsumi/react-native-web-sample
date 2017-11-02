import { AppRegistry } from 'react-native'
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') });

// Register ServiceWorker
registerServiceWorker();
