import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';

import styles from './styles';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
    headerTitleStyle: {
      color: '#FF7C00',
      fontSize: 28,
      fontWeight: 'bold'
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Text style={styles.header}>About Screen</Text>
        </View>
      </View>
    );
  }
}
