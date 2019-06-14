import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  /* calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#FF7C00',
    height: 10
  }, */
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
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
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  textInfo: {
    borderRadius: 8,
    color: '#656565',
    fontSize: 18,
    marginBottom: '5%',
    padding: 1,
    paddingBottom: 6,
    textAlign: 'center'
  }
});

export default styles;
