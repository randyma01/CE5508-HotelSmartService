import * as React from 'react';
import { Text, View } from 'react-native';

export default class ReservationTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ReservationTab</Text>
      </View>
    );
  }
}
