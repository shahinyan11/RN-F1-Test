import {GET_DATA_REQUEST, SET_DRIVERS} from '../../actions/app';
import {InitData} from './types';

const initialState: InitData = {
  status: 'no',
  drivers: [],
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
      console.log(222, action.payload.data);
      return {
        ...state,
        drivers: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
}
