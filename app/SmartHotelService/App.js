import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeTab from './src/screens/home-tab';

const AppStack = createStackNavigator({
  HomeTab: { screen: HomeTab }
});

const App = createAppContainer(AppStack);

export default App;
