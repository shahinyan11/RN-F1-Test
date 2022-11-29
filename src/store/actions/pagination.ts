export const SET_PAGE = 'SET_PAGE';
export const SET_INDEX = 'SET_INDEX';

export function setCurrentPage(page: number) {
  return {
    type: SET_PAGE,
    payload: page,
  };
}
export function setIndex(index: number) {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
