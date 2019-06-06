import * as React from 'react';
import { Text, createStackNavigator, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { loadSettings, saveSettings } from '../../storage/storage';

import SettingsList from '../../components/settingsList';

import LanguageScreen from '../languaje/index';
import ContactScreen from '../contact/index';

import styles from './styles';

export default class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const initialState = await loadSettings();

    this.setState(initialState);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Extras</Text>
          <SettingsList />
        </ScrollView>
      </View>
    );
  }
}

/* const SettingTabNavigator = createStackNavigator({
  Setting: SettingScreen,
  Language: LanguageScreen,
  Contact: ContactScreen
});

export default SettingTabNavigator; */
