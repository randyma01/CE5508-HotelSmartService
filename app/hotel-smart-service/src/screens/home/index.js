import * as React from 'react';
import { Image, Text, ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import InfoList from '../../components/infoList'; // components of ui of lanuage selector

import RoomScreen from '../room/index'; //screen rooms
import ServiceScreen from '../service/index'; //screen services

import styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Costa del Sol',
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
        <ScrollView style={styles.scrollview}>
          {/*           <Text style={styles.header}>Hotel y Restaurante Costa del Sol</Text>
           */}
          <Image
            style={{ width: '100%', height: 200, resizeMode: 'stretch' }}
            source={{
              uri: 'https://media-bucket-shs.s3.amazonaws.com/147997361.jpg'
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Rooms: RoomScreen,
  Services: ServiceScreen
});

export default HomeNavigator;
