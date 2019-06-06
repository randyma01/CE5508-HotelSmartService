import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';

import styles from './styles';

export default class ClimateScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Climate</Text>
        </ScrollView>
      </View>
    );
  }
}
