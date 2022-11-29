import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getDriversAction} from '../../store/actions/app';
import DriversAll from '../../components/DriversAll';

function useContainer() {
  const dispatch = useDispatch();
  const {currentPage} = useSelector((state: any) => state.pagination);
  const {drivers} = useSelector((state: any) => state.app);

  useEffect(() => {
    dispatch(getDriversAction());
  }, [currentPage, dispatch]);

  const renderItem = ({item}: any) => {
    const {givenName, familyName, nationality} = item;

    return (
      <DriversAll name={`${givenName} ${familyName}`} country={nationality} />
    );
  };

  return {
    drivers,
    renderItem,
  };
}

export default useContainer;
