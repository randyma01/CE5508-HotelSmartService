import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageThumbnail: {
    alignItems: 'center',
    resizeMode: 'contain'
  },
  mainView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  gridViewColumns: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 100,
    justifyContent: 'center',
    margin: 2
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
  textBody: {
    color: '#000000',
    fontSize: 20,
    marginTop: '10%',
    textAlign: 'left',
    textDecorationStyle: 'solid'
  },
  textContact: {
    color: '#000000',
    fontSize: 20,
    marginTop: '10%',
    textAlign: 'left',
    textDecorationStyle: 'solid'
  },
  scrollview: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default styles;
