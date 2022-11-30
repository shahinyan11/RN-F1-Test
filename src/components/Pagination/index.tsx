import React from 'react';
import {View, Text, Pressable} from 'react-native';
import st from './style';
import _ from 'lodash';
import useContainer from './hook';
import LeftArrow from '../../assets/svg/leftArrow';
import RightArrow from '../../assets/svg/rightArrow';

import {PaginationProps} from './dataTypes';

function Pagination(props: PaginationProps) {
  const {
    pages,
    currentPage,
    prevDisabled,
    nextDisabled,
    handlePrev,
    handleNext,
    handlePageClick,
  } = useContainer(props);

  return (
    <View style={st.container}>
      <Pressable
        style={st.arrowView}
        onPress={handlePrev}
        disabled={prevDisabled}>
        <LeftArrow disabled={prevDisabled} />
      </Pressable>
      {pages.map((page: number) => (
        <Pressable
          key={_.uniqueId()}
          style={currentPage === page ? st.activeNum : st.numView}
          onPress={() => handlePageClick(page)}>
          <Text style={currentPage === page ? st.activeText : st.text}>
            {page}
          </Text>
        </Pressable>
      ))}
      <Pressable
        style={st.arrowView}
        onPress={handleNext}
        disabled={nextDisabled}>
        <RightArrow disabled={nextDisabled} />
      </Pressable>
    </View>
  );
}

export default Pagination;
