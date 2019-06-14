import * as React from 'react';
import { FlatList, RefreshControl, ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

import i18n from '../../common/i18n';

import CalendarList from '../../components/calendarList';

import CalendarScreen from '../calendar/index';

import styles from './styles';

class ActivityScreen extends React.Component {
  static navigationOptions = {
    title: i18n.t('Activity.activity'),
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
      list: [],
      activity: []
    };
  }

  componentWillMount() {
    return fetch(
      'https://7yrptxv6.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27activity%27%5D%20%7C%7B%0A%20%20activity%2C%0A%20%20maxPeople%2C%0A%20%20minPeople%2C%0A%20%20price%2C%0A%20%20imageUrl%2C%0A%20%20date%0A%7D'
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
                      date: item.date,
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
      <Text style={styles.textRoom}> Date: {item.date}</Text>
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
          <ScrollView style={styles.scrollview}>
            <CalendarList
              onPressItem={screen => this.props.navigation.navigate(screen)}
            />
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
          </ScrollView>
        </View>
      );
    }
  }
}
const ActivityNavigator = createStackNavigator({
  Activity: ActivityScreen,
  Calendar: CalendarScreen
});

export default ActivityNavigator;
