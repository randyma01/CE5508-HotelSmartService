import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  textTitle: {
    color: '#FF7C00',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    marginTop: '20%',
    textAlign: 'left',
    textDecorationStyle: 'solid',
    width: '50%'
  },
  scrollview: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default styles;
