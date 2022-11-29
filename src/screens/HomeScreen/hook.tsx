import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getDrivers} from '../../store/actions/app';
import DriverItem from '../../components/DriverItem';

function useContainer() {
  const dispatch = useDispatch();
  const {currentPage} = useSelector((state: any) => state.pagination);
  const {drivers} = useSelector((state: any) => state.app);

  useEffect(() => {
    dispatch(getDrivers());
  }, [currentPage, dispatch]);

  const renderItem = ({item}: any) => {
    return <DriverItem {...item} />;
  };

  return {
    drivers,
    renderItem,
  };
}

export default useContainer;
