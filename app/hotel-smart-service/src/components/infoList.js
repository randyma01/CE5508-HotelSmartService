import React from 'react';
import { View } from 'react-native';

import InfoListItem from './infoListItem';

const hotelInformation = [
  {
    name: 'Restaurant',
    screen: 'Restaurant'
  },
  {
    name: 'Rooms',
    screen: 'Rooms'
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
