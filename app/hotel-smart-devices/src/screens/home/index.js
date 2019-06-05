import * as React from 'react';
import { Image, Text, ScrollView, View } from 'react-native';

import styles from './styles';

export default class HomeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  _getMedia = () => {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.textTitle}>Smart Hotel Services</Text>
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
