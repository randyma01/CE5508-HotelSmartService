import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import ActivityTab from '../activity-tab/index';
import ClimateTab from '../climate-tab/index';
import ExtrasTab from '../extras-tab/index';
import FeedbackTab from '../feedback-tab/index';
import HomeTab from '../home-tab/index';
import ReservationTab from '../reservation-tab/index';

const TabsControl = createBottomTabNavigator(
  {
    Activity: {
      screen: ActivityTab
    },
    Climate: {
      screen: ClimateTab
    },
    Extras: {
      screen: ExtrasTab
    },
    Feedback: {
      screen: FeedbackTab
    },
    Home: {
      screen: HomeTab
    },
    Reservation: {
      screen: ReservationTab
    }
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Activity') {
          iconName = `google-controller${focused ? '' : '-off'}`;
        } else if (routeName === 'Climate') {
          iconName = `chart-bar${focused ? '' : '-stacked'}`;
        } else if (routeName === 'Extras') {
          iconName = `chart-bar${focused ? '' : '-stacked'}`;
        } else if (routeName === 'Feedback') {
          iconName = `chart-bar${focused ? '' : '-stacked'}`;
        } else if (routeName === 'Home') {
          iconName = `chart-bar${focused ? '' : '-stacked'}`;
        } else if (routeName === 'Reservation') {
          iconName = `chart-bar${focused ? '' : '-stacked'}`;
        }
        return (
          <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />
        );
      }
    }),

    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'blue'
    }
  }
);

export default TabsControl;
