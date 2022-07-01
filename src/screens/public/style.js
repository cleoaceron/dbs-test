import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 640,
    height: 360,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  marginText: {
    marginVertical: 5,
  },
  searchStyle: {
    borderColor: '#CCC',
    borderWidth: 1,
    margin: 15,
  },
  buttonStyleContainer: {
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
