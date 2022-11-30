import React from 'react';
import {ListRenderItem} from 'react-native';

import RaceItem from '../../components/RaceItem';
import useTypedSelector from '../../hooks/useTypedSelector';
import {Race} from '../../store/reducers/app/dataTypes';

function useContainer() {
  const {races} = useTypedSelector(state => state.app);

  const renderItem: ListRenderItem<Race> = ({item}) => {
    return <RaceItem {...item} />;
  };

  return {
    races,
    renderItem,
  };
}

export default useContainer;
