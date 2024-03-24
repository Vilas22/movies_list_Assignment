import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../constant';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.99,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderColor: Colors.orange,
    borderWidth: 3,
  },
  movieContainer: {
    width: width,
    height: height * 0.99,
    backgroundColor: Colors.white,
    borderColor: Colors.orange,
    borderWidth: 3,
    alignContent: 'center',
    contentContainerStyle: 'center',
  },
  cardBox: {
    backgroundColor: Colors.orange,
    elevation: 10,
    margin: 5,
    width: width * 0.45,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: width * 0.4,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  movieImage: {
    width: width * 0.8,
    height: height * 0.6,
    resizeMode: 'contain',
    margin: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    width: width * 0.4,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    color: '#000',
  },
  detailTitle: {
    fontSize: 14,
    width: width * 0.8,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 2,
    color: Colors.black,
    alignSelf: 'center',
  },
  contentContainerStyle: {
    paddingBo: 10,
  },
  headetBox: {
    width: width,
    padding: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: Colors.white,
    elevation: 10,
    borderColor: Colors.orange,
    borderWidth: 2,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.orange,
  },
});
