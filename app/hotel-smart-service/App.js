import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import ActivityScreen from './src/screens/activity/index';
import ClimateScreen from './src/screens/climate/index';
import FeedbackScreen from './src/screens/feedback/index';
import HomeScreen from './src/screens/home/index';
import ReservationScreen from './src/screens/reservation/index';
import SettingScreen from './src/screens/setting/index';
import SplashScreen from './src/screens/splash/index';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={tintColor}
            name='home'
            size={25}
            type={'material-community'}
          />
        )
      }
    },

    RSVN: {
      screen: ReservationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={tintColor}
            name='format-list-checks'
            size={25}
            type={'material-community'}
          />
        )
      }
    },

    Activity: {
      screen: ActivityScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={tintColor}
            name='human-handsup'
            size={25}
            type={'material-community'}
          />
        )
      }
    },

    Climate: {
      screen: ClimateScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={tintColor}
            name='white-balance-sunny'
            size={25}
            type={'material-community'}
          />
        )
      }
    },

    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={tintColor}
            name='emoticon-happy'
            size={25}
            type={'material-community'}
          />
        )
      }
    },

    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={tintColor}
            name='account'
            size={25}
            type={'material-community'}
          />
        )
      }
    }
  },

  {
    tabBarOptions: {
      activeTintColor: '#FF7C00',
      adaptive: true,
      inactiveTintColor: '#8E8E8E',
      showLabel: true
    }
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
