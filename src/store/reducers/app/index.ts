import {SET_DRIVER_RACES, SET_DRIVERS} from '../../actions/app';
import {InitData} from './dataTypes';
import {Action} from '../dataTypes';

const initialState: InitData = {
  drivers: [],
  races: [],
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
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
