import {
  GET_DATA_REQUEST,
  SET_DRIVER_RACES,
  SET_DRIVERS,
} from '../../actions/app';
import {InitData} from './dataTypes';

const initialState: InitData = {
  status: 'no',
  drivers: [],
  races: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        status: 'request',
      };
    }

    case SET_DRIVERS: {
      return {
        ...state,
        drivers: action.payload.data,
      };
    }

    case SET_DRIVER_RACES: {
      return {
        ...state,
        races: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
