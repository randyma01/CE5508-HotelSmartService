import * as React from 'react';
import {
  Alert,
  FlatList,
  Text,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';
import call from 'react-native-phone-call';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import styles from './styles';
import { AnimatedRegion } from 'react-native-maps';

const args = {
  number: '9093900003',
  prompt: false
};

//call(args).catch(console.error)

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
    headerTitleStyle: {
      color: '#FF7C00',
      fontSize: 28,
      fontWeight: 'bold'
    }
  };

  constructor() {
    super();
    this.state = {
      dataSource: [
        { key: 'Facebook', icon: 'facebook' },
        { key: 'Web', icon: 'web' },
        { key: 'Phone', icon: 'phone' },
        { key: 'Waze', icon: 'waze' }
      ]
    };
  }

  _selectGridItem(item) {
    if (item === 'One') {
      Alert.alert('This will open Facebook App!');
    } else if (item === 'Two') {
      Alert.alert('This will open the web browser!');
    } else if (item === 'Three') {
      Alert.alert('This will open the phone!');
    } else if (item === Four) {
      Alert.alert('This will open the Waze App!');
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.textBody}> Our Media !</Text>
          <Text style={styles.textBody}>
            {' '}
            (Click the icons to be redirected).
          </Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={styles.gridViewColumns}>
                <TouchableHighlight
                  underlayColor={'#FF7C00'}
                  onPress={this._selectGridItem.bind(this, item.key)}
                >
                  <MaterialCommunityIcons
                    style={styles.imageThumbnail}
                    size={50}
                    name={item.icon}
                  />
                </TouchableHighlight>
              </View>
            )}
            numColumns={2}
          />
          <View>
            <Text style={styles.textBody}>Contact</Text>
            <Text style={styles.textContact}>Phone: </Text>
            <Text style={styles.textContact}>Email: </Text>
            <Text style={styles.textContact}>Email: </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
