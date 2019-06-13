import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';

import i18n from '../../common/i18n';

import styles from './styles';

export default class ActivityScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>{i18n.t('Activity.activity')}</Text>
        </ScrollView>
      </View>
    );
  }
}
