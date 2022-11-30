import {StackScreenProps} from '@react-navigation/stack';

import {Driver} from '../../store/reducers/app/dataTypes';

type DriverInfoScreenNavigation = {
  DriverInfoScreen: Driver;
};

export type DriverInfoScreenProps = StackScreenProps<
  DriverInfoScreenNavigation,
  'DriverInfoScreen'
>;
