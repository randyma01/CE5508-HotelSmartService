import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    padding: '2%'
  },
  contentContainer: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  flowRight: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  header: {
    color: '#FF7C00',
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
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
  ratingText: {
    paddingLeft: 10,
    color: '#FF7C00'
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000000'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
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
  textApixu: {
    borderBottomWidth: StyleSheet.hairlineWidth,
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
