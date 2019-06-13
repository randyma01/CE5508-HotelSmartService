import React from 'react';
import { View, Text } from 'react-native';

import i18n from '../../common/i18n';

import styles from './styles';

import { loadSettings } from '../../storage/settingStorage';

class SplashScreen extends React.Component {
  async componentDidMount() {
    const settings = await loadSettings();

    if (settings !== null) {
      i18n.locale = settings.locale;
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Hotel y Restaurante Costa del Sol</Text>
      </View>
    );
  }
}

export default SplashScreen;
