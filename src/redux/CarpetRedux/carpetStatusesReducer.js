import { CARPET_STATUSES, CARPET_STATUSES_FAILURE, CARPET_STATUSES_SUCCESS, CARPET_TYPES_FAILURE, CARPET_TYPES_FETCHING, CARPET_TYPES_SUCCESS } from "./types";

const initialState = {
  value: [],
  loading: false,
  types: [],
}

export const carpetStatses = (state = initialState, action) => {
  switch (action.type) {
    case CARPET_STATUSES_SUCCESS:
      return {
        ...state,
        value: action.payload.statuses,
        loading: false,
      }
    case CARPET_STATUSES_FAILURE:
      return {
        ...state,
        loading: false
      }
    case CARPET_STATUSES:
      return {
        ...state,
        loading: true
      }
    case CARPET_TYPES_FETCHING:
      return {
        ...state,
        loading: true
      }
    case CARPET_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload.types,
        loading: false
      }
    case CARPET_TYPES_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}