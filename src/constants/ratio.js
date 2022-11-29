import {Dimensions} from 'react-native';
let width = Dimensions.get('window').width;
console.log(width)

export const ratio = width / 392.72727272727275;
console.log('ratio', ratio);
export const Size = {};

for (let i = 1; i < 700; i++) {
  Size[`size${i}`] = i * ratio > i ? i : i * ratio;
}

export const Sizes = (size) => {
  return Size[`size${size}`];
};
