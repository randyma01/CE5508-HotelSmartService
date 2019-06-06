import React from 'react';
import { Text, View } from 'react-native';

import SettingsListItem from './settingsListItem';

const settings = [
  {
    name: 'Display language'
  },
  {
    name: 'Contact'
  },
  {
    name: 'Social Media'
  }
];

class SettingsList extends React.Component {
  render() {
    return (
      <View>
        {settings.map(item => (
          <SettingsListItem key={item.name} title={item.name} />
        ))}
      </View>
    );
  }
}

export default SettingsList;
