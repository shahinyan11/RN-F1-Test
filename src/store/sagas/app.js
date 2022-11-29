import {takeLatest, put, call} from 'redux-saga/effects';

import {GET_DRIVERS_REQUEST, SET_DRIVERS} from '../actions/app';
import {PAGINATION_LIMIT} from '../../constants';
import store from '../configureStore';
import * as api from '../../api';

function* getDrivers() {
  const {pagination} = store.getState();
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
        totalPages: data.MRData.total,
      },
    });

  } catch (e) {
    console.log(444, e);
  }
}

export default function* watcher() {
  yield takeLatest(GET_DRIVERS_REQUEST, getDrivers);
}
