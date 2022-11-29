import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    marginVertical: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    color: 'black',
    textAlign: 'center',
    fontSize: Sizes(12),
  },

  bluText: {
    width: '100%',
    color: 'blue',
    textAlign: 'center',
    fontSize: Sizes(12),
  },
});
