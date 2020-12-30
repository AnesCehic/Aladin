import { CARPET_STATUSES, CARPET_STATUSES_FAILURE, CARPET_STATUSES_SUCCESS, CARPET_TYPES_FAILURE, CARPET_TYPES_SUCCESS, CARPET_TYPES_FETCHING } from "./types"

export const getCarpetStatuses = () => {
  return {
    type: CARPET_STATUSES
  }
}

export const carpetStatusesSuccess = (statuses) => {
  return {
    type: CARPET_STATUSES_SUCCESS,
    payload: {
      statuses
    }
  }
}

export const carpetStatusesFailure = () => {
  return {
    type: CARPET_STATUSES_FAILURE
  }
}

export const getCarpetTypes = () => {
  return {
    type: CARPET_TYPES_FETCHING,
  }
}

export const getCarpetTypesSuccess = (types) => {
  return {
    type: CARPET_TYPES_SUCCESS,
    payload: {
      types,
    }
  }
}

export const getCarpetTypesFailure = () => {
  return {
    type: CARPET_TYPES_FAILURE
  }
}