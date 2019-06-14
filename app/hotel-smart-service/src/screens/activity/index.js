import * as React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import i18n from '../../common/i18n';

import styles from './styles';

export default class ActivityScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      refreshing: false,
      list: [],
      activity: []
    };
  }

  componentWillMount() {
    return fetch(
      'https://7yrptxv6.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27activity%27%5D%20%7C%7B%0A%20%20activity%2C%0A%20%20maxPeople%2C%0A%20%20minPeople%2C%0A%20%20price%2C%0A%20%20imageUrl%0A%7D'
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson != '') {
          const parseResponse = JSON.stringify(responseJson);
          if (parseResponse != '') {
            this.setState({
              list: JSON.parse(parseResponse)
            });
            setTimeout(
              () =>
                this.setState({
                  activity: this.state.list.result.map(function(item, index) {
                    return {
                      key: index,
                      activity: item.activity,
                      image: item.imageUrl,
                      maxPeople: item.maxPeople,
                      minPeople: item.mineople,
                      price: item.price
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
      title={item.activity}
      key={item.key}
      image={{ uri: item.image }}
    >
      <Text style={styles.textRoom}> Max People: {item.maxPeople}</Text>
      <Text style={styles.textRoom}> Min People: {item.minPeople}</Text>
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
          <Text style={styles.header}>{i18n.t('Activity.activity')}</Text>

          <Text style={styles.textInfo}>Check our activities!</Text>
          {
            <FlatList
              keyExtractor={this._keyExtractor}
              data={this.state.activity}
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
