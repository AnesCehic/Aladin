import { takeEvery, takeLatest } from "redux-saga/effects"
import { MOVE_ORDER } from "../types"

export function* moveOrder(action) {
  
  console.log("ACTION: ", action)
  try {
    console.log("ACTION: ", action)
  } catch (error) {
    
  }
}

export function* watchMoveOrder() {
  yield takeEvery(MOVE_ORDER, moveOrder)
}