import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#FF7C00',
    //borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    height: 25,
    marginBottom: '3%',
    marginTop: '3%',
    padding: 8,
    textAlign: 'center',
    width: 160
  },
  header: {
    color: '#FF7C00',
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    color: '#000000',
    fontSize: 18,
    height: 36,
    justifyContent: 'space-between',
    marginRight: 5,
    marginTop: 10,
    padding: 1,
    paddingBottom: 20,
    textAlign: 'center',
    width: '60%'
  },
  mainView: {
    alignItems: 'center',
    marginTop: 40,
    padding: 30
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
  textInfo: {
    borderRadius: 8,
    color: '#656565',
    fontSize: 18,
    marginBottom: '5%',
    marginTop: '5%',
    padding: 1,
    paddingBottom: 6,
    textAlign: 'center'
  }
});

export default styles;
