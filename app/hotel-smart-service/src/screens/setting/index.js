import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { loadSettings, saveSettings } from '../../storage/storage'; // function of storage

import SettingsList from '../../components/settingsList'; // components of ui of lanuage selector

import LanguageScreen from '../language/index';
import ContactScreen from '../contact/index';

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
          {/* <Text style={styles.header}>Extras</Text> */}
          <SettingsList
            onPressItem={screen => this.props.navigation.navigate(screen)}
          />
        </ScrollView>
      </View>
    );
  }
}

const SettingNavigator = createStackNavigator({
  Setting: SettingScreen,
  Language: LanguageScreen,
  Contact: ContactScreen
});

export default SettingNavigator;
