import * as React from 'react';
import { Text, View } from 'react-native';

export default class FeedbackClimate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FeedbackClimate</Text>
      </View>
    );
  }
}
