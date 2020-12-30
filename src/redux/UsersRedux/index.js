import { FETCHING_USERS_FAILURE, FETCHING_USERS_PENDING, FETCHING_USERS_SUCCESS, SET_COUNT, SET_GROUP_BY, SET_LIMIT, SET_OFFSET, SET_PAGE } from "./types";

const initialState = {
  offset: 0,
  limit: 10,
  group_by: null,
  total: 20,
  page: 0,
  users: [],
  isFetching: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload.limit
      }
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload.offset
      }
    case SET_GROUP_BY:
      return {
        ...state,
        group_by: action.payload.groupBy
      }
    case SET_COUNT:
      return {
        ...state,
        total: action.payload.total
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.payload.page
      }
    case FETCHING_USERS_PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload.users
      }
    case FETCHING_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state;
  }
}