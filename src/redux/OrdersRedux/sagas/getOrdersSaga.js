import { call, delay, put, takeLatest } from "redux-saga/effects"
import OrdersApi from "../../../api/OrdersApi"
import { setFetching, fetchingSuccess, fetchingFailure } from "../actions"
import { GET_ORDERS } from "../types"

export function* getSagas() {
  try {
    yield put(setFetching())
    const res = yield call(OrdersApi.getOrders);

    yield put(fetchingSuccess(res.data))
  } catch (error) {
    yield put(fetchingFailure())
  }
}

export function* watchGetOrders() {
  yield takeLatest(GET_ORDERS, getSagas);
}