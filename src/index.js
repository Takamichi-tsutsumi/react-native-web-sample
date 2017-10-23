import React from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'
import registerServiceWorker from './registerServiceWorker';

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>;
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />;
const App = () => (
  <Card>
    <Title>App Card</Title>
    <Photo uri="http://www.gstatic.com/webp/gallery/1.jpg" />
  </Card>
)

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
})

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })

// Register ServiceWorker
registerServiceWorker();
