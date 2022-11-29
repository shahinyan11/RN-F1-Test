import {select, takeLatest, put, call} from 'redux-saga/effects';

import {PAGINATION_LIMIT} from '../../../constants';
import {getDriversRacesAction} from './dataTypes';
import * as api from '../../../api';
import {
  GET__DRIVER_RACES_REQUEST,
  GET_DRIVERS_REQUEST,
  SET_DRIVER_RACES,
  SET_DRIVERS,
} from '../../actions/app';

function* getDrivers() {
  const {pagination} = yield select();
  console.log(pagination);
  let offset = (pagination.currentPage - 1) * PAGINATION_LIMIT;

  try {
    const params = {
      offset,
      limit: PAGINATION_LIMIT,
    };
    const {data} = yield call(api.getDrivers, params);

    yield put({
      type: SET_DRIVERS,
      payload: {
        data: data.MRData.DriverTable.Drivers,
        totalPages: Math.ceil(data.MRData.total / PAGINATION_LIMIT),
      },
    });
  } catch (e) {
    console.log('getDrivers', e);
  }
}

function* getDriversRaces(action: getDriversRacesAction) {
  try {
    const {data} = yield call(api.getDriverRaces, action.payload);

    yield put({
      type: SET_DRIVER_RACES,
      payload: data.MRData.RaceTable.Races,
    });
  } catch (e) {
    console.log('getDriversRaces', e);
  }
}

export default function* watcher() {
  yield takeLatest(GET_DRIVERS_REQUEST, getDrivers);
  yield takeLatest(GET__DRIVER_RACES_REQUEST, getDriversRaces);
}
