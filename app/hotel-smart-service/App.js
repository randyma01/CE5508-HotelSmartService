import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import ActivityScreen from './src/screens/activity/index';
import ClimateScreen from './src/screens/climate/index';
import SettingScreen from './src/screens/setting/index';
import FeedbackScreen from './src/screens/feedback/index';
import HomeScreen from './src/screens/home/index';
import ReservationScreen from './src/screens/reservation/index';

import styles from './src/styles/styles';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='home' size={25} color={tintColor} />
        )
      }
    },

    RSVN: {
      screen: ReservationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='format-list-checks'
            size={25}
            color={tintColor}
          />
        )
      }
    },

    Activity: {
      screen: ActivityScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='human-handsup'
            size={25}
            color={tintColor}
          />
        )
      }
    },

    Climate: {
      screen: ClimateScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='white-balance-sunny'
            size={25}
            color={tintColor}
          />
        )
      }
    },

    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='emoticon-happy'
            size={25}
            color={tintColor}
          />
        )
      }
    },

    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='account' size={25} color={tintColor} />
        )
      }
    }
  },

  {
    tabBarOptions: {
      activeTintColor: '#FF7C00',
      inactiveTintColor: '#8E8E8E',
      showLabel: true,
      adaptive: true
    }
  }
);

/* class App extends React.Component {
  render() {
    return <HomeNavigator />;
  }
} */

/* const HomeNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Activity: ActivityScreen,
  Climate: ClimateScreen,
  Extras: ExtrasScreen,
  Feedback: FeedbackScreen,
  RSVN: ReservationScreen
}); */

export default createAppContainer(AppNavigator);
