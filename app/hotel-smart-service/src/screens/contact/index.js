import * as React from 'react';
import {
  FlatList,
  Linking,
  Text,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';
import call from 'react-native-phone-call';
import { Icon } from 'react-native-elements';
import { showLocation } from 'react-native-map-link';

import styles from './styles';

const args = {
  number: '89989725', // hotel: 26344008
  prompt: false
};

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
        { key: 'Waze', icon: 'directions' }
      ]
    };

    this.selectGridItem = this.selectGridItem.bind(this);
  }

  selectGridItem(item) {
    if (item === 'Facebook') {
      Linking.openURL('https://www.facebook.com/Costadelsolcr/');
    } else if (item === 'Web') {
      Linking.openURL('http://hotelrestaurantecostadelsol.com');
    } else if (item === 'Phone') {
      call(args).catch(console.error);
    } else if (item === 'Waze') {
      showLocation({
        latitude: 9.9249929,
        longitude: -84.7120169,
        title: 'Hotel y Restaurante Costa Del Sol',
        app: 'waze'
      }).catch(console.error);
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollview}>
          <View>
            <Text style={styles.textContact}>Address</Text>
            <Text style={styles.textContactData}>
              Mata Limon – Caldera – Puntarenas
            </Text>
            <Text style={styles.textContact}>Schedule:</Text>
            <Text style={styles.textContactData}>10:00 a.m to 9:00 p.m</Text>
            <Text style={styles.textContact}>Phone:</Text>
            <Text style={styles.textContactData}>26344008</Text>

            <Text style={styles.textContact}>Email:</Text>
            <Text style={styles.textContactData}>
              info@hotelrestaurantecostadelsol.com
              reservaciones@hotelrestaurantecostadelsol.com
            </Text>
          </View>
          <Text style={styles.textBody}>Click the icons to be redirected.</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={styles.gridViewColumns}>
                <TouchableHighlight
                  underlayColor={'#FF7C00'}
                  onPress={this.selectGridItem.bind(this, item.key)}
                >
                  <Icon
                    style={styles.imageThumbnail}
                    size={50}
                    name={item.icon}
                    type={'material-community'}
                  />
                </TouchableHighlight>
              </View>
            )}
            numColumns={2}
          />
        </ScrollView>
      </View>
    );
  }
}
