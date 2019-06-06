import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#FF7C00',
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  mainView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 45
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: '#FF7C00',
    fontSize: 20,
    margin: 10,
    marginTop: '20%',
    textAlign: 'left',
    textDecorationStyle: 'solid',
    width: '50%'
  }
});

export default styles;
