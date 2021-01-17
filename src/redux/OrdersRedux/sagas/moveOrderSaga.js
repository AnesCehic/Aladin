import { takeEvery, takeLatest } from "redux-saga/effects"
import { MOVE_ORDER } from "../types"

export function* moveOrder(action) {

  try {
  } catch (error) {
    
  }
}

export function* watchMoveOrder() {
  yield takeEvery(MOVE_ORDER, moveOrder)
}