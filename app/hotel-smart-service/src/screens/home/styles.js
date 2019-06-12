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
  },
  textBody: {
    color: '#FF7C00',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: '10%',
    textAlign: 'center',
    textDecorationStyle: 'solid'
  },
  textInfo: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    color: '#656565',
    fontSize: 18,
    height: 36,
    marginTop: 20,
    padding: 1,
    paddingBottom: 6,
    textAlign: 'center'
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
  }
});

export default styles;
