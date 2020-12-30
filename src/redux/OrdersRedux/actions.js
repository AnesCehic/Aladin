const { SET_SEARCH_INPUT, FETCHING, SUCCESS, FAILURE } = require("./types")

export const setSearchInput = (input) => {
  return {
    type: SET_SEARCH_INPUT,
    payload: {
      searchInput: input
    }
  }
}

export const setFetching = () => {
  return {
    type: FETCHING
  }
}

export const fetchingSuccess = (orders) => {
  return {
    type: SUCCESS,
    payload: {
      orders
    }
  }
}

export const fetchingFailure = () => {
  return {
    type: FAILURE
  }
}