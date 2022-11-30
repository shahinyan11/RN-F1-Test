import {SET_DRIVERS} from '../../actions/app';
import {SET_PAGE} from '../../actions/pagination';
import {Action} from '../dataTypes';

const initialState = {
  currentPage: 1,
  totalPages: 10,
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
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

    default: {
      return state;
    }
  }
}
