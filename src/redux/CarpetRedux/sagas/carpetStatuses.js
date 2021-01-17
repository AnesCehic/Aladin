import { call, put, takeLatest } from "redux-saga/effects";
import CarpetApi from "../../../api/CarpetApi";

import { carpetStatusesFailure, carpetStatusesSuccess, getCarpetStatuses, getCarpetTypes, getCarpetTypesFailure, getCarpetTypesSuccess } from '../actions';
import { CARPET_STATUSES_SAGA, CARPET_TYPES } from "../types";

export function* getCarpetStatusesSaga() {
  try {
    yield put(getCarpetStatuses());

    const res = yield call(CarpetApi.getCarpetStatuses);

    yield put(carpetStatusesSuccess(res.data))

  } catch (error) {
    yield put(carpetStatusesFailure())
  }
}

export function* getCarpetTypesSaga () {
  try {
    yield put(getCarpetTypes());

    const res = yield call(CarpetApi.getCarpetTypes);

    yield put(getCarpetTypesSuccess(res.data));
  } catch (error) {
    yield put(getCarpetTypesFailure())
  }
}

export function* watchGetCarpetStatuses() {
  yield takeLatest(CARPET_STATUSES_SAGA, getCarpetStatusesSaga);
}

export function* watchGetCarpetTypes() {
  yield takeLatest(CARPET_TYPES, getCarpetTypesSaga);
}