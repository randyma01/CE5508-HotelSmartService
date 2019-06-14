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
  textDish: {
    color: '#FF7C00',
    fontSize: 16,
    textAlign: 'left',
    textDecorationStyle: 'solid'
  },
  textIngredients: {
    color: '#656565',
    fontSize: 12,
    textAlign: 'left'
  },
  textInfo: {
    borderRadius: 8,
    color: '#656565',
    fontSize: 18,
    padding: 1,
    textAlign: 'center'
  }
});

export default styles;
