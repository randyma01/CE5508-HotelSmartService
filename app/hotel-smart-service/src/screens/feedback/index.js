import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../../../aws-exports';

Amplify.configure(AWSConfig);

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

class FeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'Feedback',
    headerTitleStyle: {
      color: '#FF7C00',
      fontSize: 28,
      fontWeight: 'bold'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phone_number: '',
      email: '',
      confirmationCode: ''
    };
  }

  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
      .then(() => console.log('yes'))
      .catch(err => console.log('no', err));
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  signUp() {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phone_number
      }
    })
      .then(() => console.log('yes'))
      .catch(err => console.log('no', err));
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.textInfo}>
          To use this feature, you must sign in first.
        </Text>
        <TextInput
          onChange={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='Username'
        />
        <TextInput
          onChange={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='Password'
        />
        <TextInput
          onChange={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder='Phone'
        />
        <TextInput
          onChange={value => this.onChangeText('email', value)}
          style={styles.input}
          placeholder='Email'
        />
        <TouchableOpacity onPress={this.signUp.bind(this)}>
          <Text style={styles.bottom}>Confirm</Text>
        </TouchableOpacity>
        <TextInput
          onChange={value => this.onChangeTest('confirmationCode', value)}
          style={styles.input}
          placeholder='Confirmation Code'
        />
        <TouchableOpacity onPress={this.confirmSignUp.bind(this)}>
          <Text style={styles.bottom}>Confirm Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const FeedbackNavigator = createStackNavigator({
  Feedback: FeedbackScreen
});

export default FeedbackNavigator;
