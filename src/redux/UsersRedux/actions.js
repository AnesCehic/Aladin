import {
  FETCHING_USERS_FAILURE,
  FETCHING_USERS_PENDING,
  FETCHING_USERS_SUCCESS,
  RESET_GROUP_BY,
  SET_COUNT,
  SET_GROUP_BY,
  SET_LIMIT,
  SET_OFFSET,
  SET_PAGE
} from "./types"

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    payload: {
      limit
    }
  }
}

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    payload: {
      offset
    }
  }
}

export const setGroupBy = (groupBy) => {
  return {
    type: SET_GROUP_BY,
    payload: {
      groupBy
    }
  }
}

export const resetGroupBy = () => {
  return {
    type: RESET_GROUP_BY
  }
}

export const setCount = (total) => {
  return {
    type: SET_COUNT,
    payload: {
      total
    }
  }
}

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: {
      page
    }
  }
}

export const fetchUsers = () => {
  return {
    type: FETCHING_USERS_PENDING,
  }
}

export const fethcUsersSuccess = (users) => {
  return {
    type: FETCHING_USERS_SUCCESS,
    payload: {
      users,
    }
  }
}

export const fethcUsersFailure = (msg) => {
  return {
    type: FETCHING_USERS_FAILURE,
    payload: {
      msg
    }
  }
}