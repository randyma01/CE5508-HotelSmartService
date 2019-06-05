import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';

export default class HomeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <Text>HomeTab</Text>
        </ScrollView>
      </View>
    );
  }
}
