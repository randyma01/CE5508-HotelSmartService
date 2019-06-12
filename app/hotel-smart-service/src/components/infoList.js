import React from 'react';
import { View } from 'react-native';

import InfoListItem from './infoListItem';

const hotelInformation = [
  {
    name: 'Rooms',
    screen: 'Rooms'
  },
  {
    name: 'Services',
    screen: 'Services'
  }
];

class InfoList extends React.Component {
  render() {
    return (
      <View>
        {hotelInformation.map(item => (
          <InfoListItem
            key={item.name}
            title={item.name}
            onPress={() => this.props.onPressItem(item.screen)}
          />
        ))}
      </View>
    );
  }
}

export default InfoList;
