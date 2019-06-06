import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

class SettingsListItem extends React.Component {
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#434343',
    width: '90%'
  },
  icon: {
    color: '#FF7C00',
    paddingLeft: 5
  }
});

export default SettingsListItem;
