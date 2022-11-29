export const SET_PAGE = 'SET_PAGE';

export function setCurrentPage(page: number) {
  return {
    type: SET_PAGE,
    payload: page,
  };
}
