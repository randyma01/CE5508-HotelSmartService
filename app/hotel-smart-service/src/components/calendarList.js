import React from 'react';
import { Text, View } from 'react-native';

import CalendarListItem from './calendarListItem';

const calendar = [
  {
    name: 'Calendar',
    screen: 'Calendar'
  }
];

class CalendarList extends React.Component {
  render() {
    return (
      <View>
        {calendar.map(item => (
          <CalendarListItem
            key={item.name}
            title={item.name}
            onPress={() => this.props.onPressItem(item.screen)}
          />
        ))}
      </View>
    );
  }
}

export default CalendarList;
