import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    backgroundColor: 'rgba(150,131,131,0.83)',
  },
  image: {
    width: '100%',
    height: Sizes(180),
    marginBottom: Sizes(50),
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes(10),
  },
  label: {
    color: 'white',
    width: Sizes(150),
    fontSize: Sizes(25),
    marginRight: Sizes(20),
  },

  text: {
    color: 'white',
    fontSize: Sizes(20),
  },

  moreInfo: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  blueText: {
    color: 'blue',
    fontSize: Sizes(20),
  },
});
