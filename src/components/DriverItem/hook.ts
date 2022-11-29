import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Driver} from '../../store/reducers/app/types';
import {getDriverRaces} from '../../store/actions/app';

function useContainer(driver: Driver) {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const handleDriverClick = () => {
    navigation.navigate('DriverInfoScreen', driver);
  };

  const handleRaceClick = () => {
    dispatch(getDriverRaces(driver.driverId));
    navigation.navigate('RaceScreen');
  };

  return {
    handleDriverClick,
    handleRaceClick,
  };
}

export default useContainer;
