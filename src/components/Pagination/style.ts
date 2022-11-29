import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

export default StyleSheet.create({
  container: {
    height: Sizes(30),
    alignSelf: 'center',
    marginVertical: Sizes(8),
    flexDirection: 'row',
  },
  arrowView: {
    width: Sizes(30),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numView: {
    width: Sizes(30),
    height: '100%',
    backgroundColor: 'white',
    borderWidth: Sizes(1),
    borderColor: '#1e4fc2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Sizes(4)
  },

  disabledView: {
    width: Sizes(30),
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeNum: {
    width: Sizes(30),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e4fc2',
    borderRadius: 10,
    marginHorizontal: Sizes(6)
  },

  text: {
    color: '#1e4fc2',
    fontSize: Sizes(16),
  },
  activeText: {
    color: 'white',
    fontSize: Sizes(16),
  },
});
