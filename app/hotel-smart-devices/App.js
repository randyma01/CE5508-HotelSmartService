import * as React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import ActivityTab from './src/screens/activity/index';
import ClimateTab from './src/screens/climate/index';
import ExtrasTab from './src/screens/extras/index';
import FeedbackTab from './src/screens/feedback/index';
import HomeTab from './src/screens/home/index';
import ReservationTab from './src/screens/reservation/index';

const AppNavigator = createBottomTabNavigator(
  {
    Activities: {
      screen: ActivityTab
    },
    Climate: {
      screen: ClimateTab
    },
    Home: {
      screen: HomeTab
    },
    RSVN: {
      screen: ReservationTab
    },
    Feedback: {
      screen: FeedbackTab
    },
    Extras: {
      screen: ExtrasTab
    }
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Activities') {
          iconName = `human-handsup`;
        } else if (routeName === 'Climate') {
          iconName = `white-balance-sunny`;
        } else if (routeName === 'Extras') {
          iconName = `account`;
        } else if (routeName === 'Feedback') {
          iconName = `emoticon-happy`;
        } else if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'RSVN') {
          iconName = `format-list-checks`;
        }
        return (
          <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />
        );
      }
    }),

    tabBarOptions: {
      activeTintColor: '#FF7C00',
      inactiveTintColor: '#8E8E8E'
    }
  }
);

const App = createAppContainer(AppNavigator);

export default App;
