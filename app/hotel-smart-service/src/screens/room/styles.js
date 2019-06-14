import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    padding: '2%'
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
  scrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  textRoom: {
    color: '#656565',
    fontSize: 12,
    textAlign: 'center',
    textDecorationStyle: 'solid'
  },
  textInfo: {
    borderRadius: 8,
    color: '#656565',
    fontSize: 16,
    padding: 1,
    textAlign: 'center'
  }
});

export default styles;
