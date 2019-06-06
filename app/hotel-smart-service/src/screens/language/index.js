import React from 'react';
import { View } from 'react-native';

import LanguageListItem from '../../components/languageListItem';

const languages = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'de',
    name: 'Español',
    englishName: 'Spanish'
  }
];

class LanguageScreen extends React.Component {
  static navigationOptions = {
    title: 'Language'
  };

  render() {
    const { navigation } = this.props;
    const currentLocale = navigation.getParam('currentLocale');

    return (
      <View style={{ marginTop: 15 }}>
        {languages.map(language => (
          <LanguageListItem
            key={language.locale}
            isActive={language.locale === currentLocale}
            locale={language.locale}
            name={language.name}
            englishName={language.englishName}
            onChangeLocale={locale =>
              navigation.navigate('Settings', { locale })
            }
          />
        ))}
      </View>
    );
  }
}

export default LanguageScreen;
