import { createAppContainer, createStackNavigator } from 'react-navigation';

import ControllerTab from './src/controller-tab/index';

const AppStack = createStackNavigator({
  ControllerTab: { screen: ControllerTab }
});

const App = createAppContainer(AppStack);

export default App;
