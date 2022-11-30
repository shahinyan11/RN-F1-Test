import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ListRenderItem} from 'react-native';

import {getDrivers} from '../../store/actions/app';
import DriverItem from '../../components/DriverItem';
import useTypedSelector from '../../hooks/useTypedSelector';
import {Driver} from '../../store/reducers/app/dataTypes';

function useContainer() {
  const dispatch = useDispatch();
  const {currentPage} = useTypedSelector(state => state.pagination);
  const {drivers} = useTypedSelector(state => state.app);

  useEffect(() => {
    dispatch(getDrivers());
  }, [currentPage, dispatch]);

  const renderItem: ListRenderItem<Driver> = ({item}) => {
    return <DriverItem {...item} />;
  };

  return {
    drivers,
    renderItem,
  };
}

export default useContainer;
