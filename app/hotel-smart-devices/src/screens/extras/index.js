import * as React from 'react';
import { Alert, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class ExtrasTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hola</Text>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={this.props.onPress}
          >
            <Text> HOLA </Text>
            <Icon style={styles.icon} name='ios-arrow-forward' size={25} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
