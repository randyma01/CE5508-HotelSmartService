import React from 'react';
import { View } from 'react-native';

import SettingsListItem from './settingsListItem';

const settings = [
  {
    name: 'Display Language',
    screen: 'Language'
  },
  {
    name: 'Contact',
    screen: 'Contact'
  }
];

class SettingsList extends React.Component {
  render() {
    return (
      <View>
        {settings.map(item => (
          <SettingsListItem
            key={item.name}
            title={item.name}
            onPress={() => this.props.onPressItem(item.screen)}
          />
        ))}
      </View>
    );
  }
}

export default SettingsList;
