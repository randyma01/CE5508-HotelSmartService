import * as React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//
//import Video from 'react-native-video';
//import { Video } from 'expo';
//

import InfoList from '../../components/infoList'; // components of ui of lanuage selector

import RoomScreen from '../room/index'; //screen rooms
import RestaurantScreen from '../restaurant/index'; //screen services

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
          <Text style={styles.textInfo}>Welcome to our newest app.</Text>
          <InfoList
            onPressItem={screen => this.props.navigation.navigate(screen)}
          />
          <Image
            style={{ width: '100%', height: 200, resizeMode: 'stretch' }}
            source={{
              uri: 'https://media-bucket-shs.s3.amazonaws.com/147997361.jpg'
            }}
          />
          {/* <Video
            source={{
              uri:
                'https://media-bucket-shs.s3.amazonaws.com/video_promotional.mp4'
            }}
            ref={ref => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen,
  Rooms: RoomScreen
});

export default HomeNavigator;
