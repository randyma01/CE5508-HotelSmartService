import * as React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import styles from './styles';

export default class RestaurantScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
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
      restaurant: [],
      menu: []
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
              menu: JSON.parse(parseResponse)
            });
            setTimeout(
              () =>
                this.setState({
                  restaurant: this.state.menu.result.map(function(item, index) {
                    return {
                      key: index,
                      dish: item.dish,
                      image: item.imageUrl,
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
    <Card
      containerStyle={styles.card}
      title={item.dish}
      key={item.key}
      image={{ uri: item.image }}
    >
      <Text style={styles.textIngredients}>{item.ingredients}</Text>
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
          <Text style={styles.textInfo}>Our finest!</Text>
          {
            <FlatList
              keyExtractor={this._keyExtractor}
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
