import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
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
