import * as React from 'react';
import { AppRegistry, RefreshControl, Text, View } from 'react-native';

import { Calendar } from 'react-native-calendars';

import i18n from '../../common/i18n';

import styles from './styles';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
    headerTitleStyle: {
      color: '#FF7C00',
      fontSize: 28,
      fontWeight: 'bold'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      refreshing: false
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <Text style={styles.textInfo}>Activities Sign Up</Text>
          <Calendar
            styles={styles.calendar}
            themes={{
              backgroundColor: '#FFFFFF',
              calendarBackground: '#FFFFFF',
              textSectionTitleColor: '#B6C1CD',
              selectedDayBackgroundColor: '#00ADF5',
              seletedDayTextColor: '#FFFFFF',
              todayTextColor: '#00ADF5',
              dayTextColor: '#2D4150',
              textDisabledColor: '#D9E1E8',
              dotColor: '#00ADF5',
              selectedDotColor: '#FFFFFF',
              arrowColor: 'orange',
              monthTextColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
        </View>
      );
    }
  }
}
