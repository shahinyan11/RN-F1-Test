import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  leftView: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  flagStyle: {
    width: Sizes(40),
    height: Sizes(25),
    marginRight: Sizes(20),
  },

  text: {
    flex: 1,
    padding: 4,
    color: 'black',
    borderWidth: 0.2,
    fontSize: Sizes(20),
    paddingHorizontal: Sizes(10),
    marginRight: Sizes(20),
    borderRadius: 4,
  },

  raceButton: {
    padding: 4,
    paddingHorizontal: Sizes(10),
    borderWidth: 1,
    borderRadius: 4,
  },

  raceText: {
    fontSize: Sizes(20),
  },
});
