import {SET_DRIVERS, GET_DATA_REQUEST} from '../../actions/app';
import {SET_INDEX, SET_PAGE} from '../../actions/pagination';

const initialState = {
  currentPage: 1,
  totalPages: 10,
  index: 0,
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
        totalPages: action.payload.totalPages,
      };
    }

    case SET_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case SET_INDEX: {
      return {
        ...state,
        index: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
