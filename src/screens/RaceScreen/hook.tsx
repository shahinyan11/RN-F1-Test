import {useSelector} from 'react-redux';
import React from 'react';

import RaceItem from '../../components/RaceItem';

function useContainer() {
  const {races} = useSelector((state: any) => state.app);

  const renderItem = ({item}: any) => {
    return <RaceItem {...item} />;
  };

  return {
    races,
    renderItem,
  };
}

export default useContainer;
