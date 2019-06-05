import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';

import styles from './styles';

export default class ClimateTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <Text>Climate</Text>
        </ScrollView>
      </View>
    );
  }
}
