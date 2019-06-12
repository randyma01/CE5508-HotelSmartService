import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageThumbnail: {
    alignItems: 'center'
    //resizeMode: 'contain'
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
    color: '#FF7C00',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: '10%',
    textAlign: 'center',
    textDecorationStyle: 'solid'
  },
  textContact: {
    color: '#FF7C00',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '5%',
    textAlign: 'center'
  },
  textContactData: {
    color: '#656565',
    fontSize: 12,
    marginTop: '5%',
    textAlign: 'center'
  },
  scrollview: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default styles;
