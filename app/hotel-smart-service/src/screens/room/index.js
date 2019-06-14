import * as React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import styles from './styles';

export default class RoomScreen extends React.Component {
  static navigationOptions = {
    title: 'Rooms Available',
    headerTitleStyle: {
      color: '#FF7C00',
      fontSize: 28,
      fontWeight: 'bold'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      refreshing: false,
      hotel: [],
      room: []
    };
  }

  componentWillMount() {
    return fetch(
      'https://7yrptxv6.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27room%27%5D%20%7C%20%7B%0A%20%20room%2C%0A%20%20beds%2C%0A%20%20price%2C%0A%20%20tv%2C%0A%20%20balcony%2C%0A%20%20imageUrl%0A%7D'
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson != '') {
          const parseResponse = JSON.stringify(responseJson);
          if (parseResponse != '') {
            this.setState({
              hotel: JSON.parse(parseResponse)
            });
            setTimeout(
              () =>
                this.setState({
                  room: this.state.hotel.result.map(function(item, index) {
                    return {
                      key: index,
                      balcony: item.balcony,
                      beds: item.beds,
                      image: item.imageUrl,
                      price: item.price,
                      room: item.room,
                      tv: item.tv
                    };
                  })
                }),
              2000
            );
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <Card
      containerStyle={styles.card}
      title={item.room}
      key={item.key}
      image={{ uri: item.image }}
    >
      <Text style={styles.textRoom}> Beds: {item.beds}</Text>
      <Text style={styles.textRoom}> Price: {item.price}</Text>
    </Card>
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <Text style={styles.textInfo}>Check our rooms!</Text>

          {
            <FlatList
              keyExtractor={this._keyExtractor}
              data={this.state.room}
              renderItem={this._renderItem}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.componentDidMount()}
                />
              }
            />
          }
        </View>
      );
    }
  }
}
