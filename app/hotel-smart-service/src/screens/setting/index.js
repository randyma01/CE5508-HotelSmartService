import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { loadSettings, saveSettings } from '../../storage/settingStorage'; // function of storage

import SettingsList from '../../components/settingsList'; // components of ui of lanuage selector

import LanguageScreen from '../language/index'; //screen
import ContactScreen from '../contact/index'; //screan

import styles from './styles';

class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerTitleStyle: {
      color: '#FF7C00',
      fontSize: 28,
      fontWeight: 'bold'
    }
  };

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
          <SettingsList
            onPressItem={screen => this.props.navigation.navigate(screen)}
          />
        </ScrollView>
      </View>
    );
  }
}

const SettingNavigator = createStackNavigator({
  Settings: SettingScreen,
  Language: LanguageScreen,
  Contact: ContactScreen
});

export default SettingNavigator;
