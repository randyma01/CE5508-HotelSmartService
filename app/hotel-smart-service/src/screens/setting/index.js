import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { loadSettings, saveSettings } from '../../storage/settingStorage'; // functions of storage

import SettingsList from '../../components/settingsList'; // components of ui of lanuage selector

import LanguageScreen from '../language/index'; //screen languages
import ContactScreen from '../contact/index'; //screen contact and info

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

    this.state = { name: '', locale: 'en' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const initialState = await loadSettings();

    this.setState(initialState);
  }

  componentDidUpdate(prevProps, prevState) {
    const locale = this.props.navigation.getParam('locale', null);
    if (locale && prevState.locale !== locale) {
      this.setState({ locale });
    }
  }

  handleSubmit() {
    saveSettings(this.state);
  }

  render() {
    const currentLocale = this.state.locale;
    const { navigation } = this.props;

    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollView}>
          <SettingsList
            onPressItem={screen =>
              navigation.navigate(screen, { currentLocale })
            }
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
