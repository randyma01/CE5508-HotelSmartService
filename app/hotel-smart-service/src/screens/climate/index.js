import * as React from 'react';
import { FlatList, RefreshControl, Text, TextInput, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import styles from './styles';

export default class ClimateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      refreshing: false
    };
  }

  componentWillMount() {
    return fetch(
      'http://api.apixu.com/v1/forecast.json?key=64700405af534cbe914184115192605&q=9.9254444,-84.7138703&days=10'
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
                  weatherday: this.state.weather.forecast.forecastday.map(
                    function(item, index) {
                      return {
                        key: index,
                        date: item.date,
                        temp: item.day.avgtemp_c,
                        condition: item.day.condition.text,
                        icon: 'http://' + item.day.condition.icon
                      };
                    }
                  )
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

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.date}
      subtitle={
        <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>{item.condition}</Text>
          <Text style={styles.ratingText}>{item.temp}°C</Text>
        </View>
      }
      leftAvatar={{ source: { uri: item.icon } }}
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
          <Text style={styles.header}>Climate</Text>
          <Text style={styles.textInfo}>
            Weather for the following seven days.
          </Text>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.weatherday}
            renderItem={this.renderItem}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.componentDidMount()}
              />
            }
          />
          <Text style={styles.textApixu}>Data powered by APIXU.</Text>
        </View>
      );
    }
  }
}
