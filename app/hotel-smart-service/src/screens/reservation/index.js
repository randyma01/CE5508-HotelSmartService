import * as React from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';

export default class ReservationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      amountPeople: '',
      response: ''
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }
  _onSearchNameUser = event => {
    this.setState({
      name: event.nativeEvent.text
    });
  };

  _onSearchLastNameUser = event => {
    this.setState({
      lastName: event.nativeEvent.text
    });
  };

  _onSearchEmailUser = event => {
    this.setState({
      email: event.nativeEvent.text
    });
  };

  _onSearchPhoneUser = event => {
    this.setState({
      Phone: event.nativeEvent.text
    });
  };

  _signUp = () => {};

  _submitInformation = () => {
    if (this.validateName() && this.validateEmail()) {
      this._signUp();
    } else {
      Alert.alert('Th entry is not valid. ');
    }
  };

  validateName() {
    if (this.state.name === '') {
      return false;
    } else {
      return true;
    }
  }

  validateEmail() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <View style={styles.containerSignUp}>
        <Text style={styles.header}>Reservation</Text>
        <Text style={styles.textInfo}>
          Make your reservation, we'll call you to confirm it.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            onChange={this._onSearchNameUser}
            placeholder='Name'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchNameUser}
          />
          <TextInput
            onChange={this._onSearchLastNameUser}
            placeholder='Last name'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchLastNameUser}
          />
          <TextInput
            autoCapitalize={'none'}
            placeholder='Phone'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            keyboardType={'numeric'}
          />
          <TextInput
            onChange={this._onSearchEmailUser}
            autoCapitalize={'none'}
            placeholder='Email'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchEmailUser}
          />
          <TextInput
            autoCapitalize={'none'}
            placeholder='Hotel or Restaurant'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            autoCapitalize={'none'}
            placeholder='Amount of People'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            keyboardType={'numeric'}
          />
          <TextInput
            autoCapitalize={'none'}
            placeholder='Date'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <TouchableOpacity onPress={this._submitInformation}>
          <Text style={styles.bottom}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
