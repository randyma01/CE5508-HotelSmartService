import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-elements';

class InfoListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.listItem} onPress={this.props.onPress}>
        <Text style={styles.listItemText}>{this.props.title}</Text>
        <Ionicons style={styles.icon} name='ios-arrow-forward' size={25} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    alignItems: 'center',
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  listItemText: {
    color: '#434343',
    fontSize: 18,
    marginLeft: 10,
    width: '90%'
  },
  icon: {
    color: '#FF7C00',
    paddingLeft: 5
  }
});

export default InfoListItem;
