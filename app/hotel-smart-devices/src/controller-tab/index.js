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
    Activities: {
      screen: ActivityTab
    },
    Climate: {
      screen: ClimateTab
    },
    Home: {
      screen: HomeTab
    },
    Reservation: {
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
          iconName = `google-controller`;
        } else if (routeName === 'Climate') {
          iconName = `white-balance-sunny`;
        } else if (routeName === 'Extras') {
          iconName = `account`;
        } else if (routeName === 'Feedback') {
          iconName = `emoticon-happy`;
        } else if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Reservation') {
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

export default TabsControl;
