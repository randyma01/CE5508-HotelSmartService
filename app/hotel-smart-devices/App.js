import { createAppContainer, createStackNavigator } from 'react-navigation';

import ControllerTab from './src/controller-tab/index';

const AppStack = createStackNavigator({
  ControllerTab: { screen: ControllerTab }
});

const App = createAppContainer(AppStack);

export default App;

/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); */
