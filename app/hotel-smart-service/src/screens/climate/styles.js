import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flowRight: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  header: {
    color: '#FF7C00',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  mainView: {
    flex: 1,
    marginTop: '10%',
    padding: '2%'
  },
  loading: {
    flex: 1,
    padding: 20
  },
  climateText: {
    color: '#FF7C00',
    paddingLeft: 10
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  textInfo: {
    borderRadius: 8,
    color: '#656565',
    fontSize: 22,
    height: 36,
    marginTop: 20,
    padding: 1,
    paddingBottom: 6,
    textAlign: 'center'
  },
  textApixu: {
    borderRadius: 8,
    color: '#656565',
    fontSize: 10,
    height: 36,
    marginTop: 20,
    padding: 1,
    paddingBottom: 6,
    textAlign: 'center'
  }
});

export default styles;
