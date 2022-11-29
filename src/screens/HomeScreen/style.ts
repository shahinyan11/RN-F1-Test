import {StyleSheet} from 'react-native';

import {Sizes} from '../../constants/ratio';

export default StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: Sizes(230),
  },
  listStyle: {
    paddingLeft: Sizes(20),
    paddingRight: Sizes(30),
  },
});
