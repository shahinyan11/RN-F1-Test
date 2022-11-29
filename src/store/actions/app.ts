export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';

export const GET_DRIVERS_REQUEST = 'GET_DRIVERS_REQUEST';
export const SET_DRIVERS = 'SET_DRIVERS';

export function getDriversAction() {
  return {
    type: GET_DRIVERS_REQUEST,
  };
}
