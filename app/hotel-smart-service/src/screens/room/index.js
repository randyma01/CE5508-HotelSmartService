import * as React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

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
      rooms: []
    };
  }

  componentWillMount() {
    return fetch(
      'https://7yrptxv6.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27menu%27%5D%20%7C%20%7B%0A%20%20dish%2C%20%0A%20%20ingredients%2C%0A%20%20available%2C%0A%20%20imageUrl%0A%7D'
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson != '') {
          const parseResponse = JSON.stringify(responseJson);
          if (parseResponse != '') {
            this.setState({
              weather: JSON.parse(parseResponse)
            });
            setTimeout(
              () =>
                this.setState({
                  restaurant: this.state.menu.result.map(function(item, index) {
                    return {
                      key: index,
                      dish: item.dish,
                      //image: item.imageUrl,
                      ingredients: item.ingredients
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
    <ListItem
      title={item.index}
      subtitle={
        <View style={styles.subtitleView}>
          {/*           <Text style={styles.ratingText}>{item.ingredients}</Text>
           */}
        </View>
      }
    />
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
          {
            <FlatList
              keyExtractor={this._keyExtractor.bind}
              data={this.state.restaurant}
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
