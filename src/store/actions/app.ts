export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';

export const GET_DRIVERS_REQUEST = 'GET_DRIVERS_REQUEST';
export const SET_DRIVERS = 'SET_DRIVERS';

export const GET__DRIVER_RACES_REQUEST = 'GET__DRIVER_RACES_REQUEST';
export const SET_DRIVER_RACES = 'SET_RACES';

export function getDrivers() {
  return {
    type: GET_DRIVERS_REQUEST,
  };
}

export function getDriverRaces(driverId: string) {
  return {
    type: GET__DRIVER_RACES_REQUEST,
    payload: driverId,
  };
}
