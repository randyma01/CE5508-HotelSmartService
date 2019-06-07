import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Button, ImagePicker, Permissions, Constants } from 'expo';

import styles from './styles';

export default class FeedbackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }
  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title='Pick an image from camera roll'
          onPress={this._pickImage}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

/* render() {
  return (
    <View style={styles.mainView}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Feedback</Text>
      </ScrollView>
    </View>
  );
} */
