import { FAILURE, FETCHING, SET_SEARCH_INPUT, SUCCESS } from "./types";

const initialStore = {
  orders: [],
  isFetching: false,
}

export const ordersReducer = (state = initialStore, action) => {
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS: {
      return {
        ...state,
        isFetching: false,
        orders: action.payload.orders
      }
    }
    case FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload.searchInput
      }
    default:
      return state;
  }
}