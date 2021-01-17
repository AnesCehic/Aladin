import { call, put, select, takeLatest } from 'redux-saga/effects'
import { fetchUsers, fethcUsersFailure, fethcUsersSuccess, setCount } from '../actions';
import { FETCH_USERS } from '../types';

import UsersApi from '../../../api/UsersApi';

export function* fetchUsersSaga() {
  try {
    yield put(fetchUsers());

    const state = yield select()
    const { offset, limit, group_by, page } = state.users;

    const res = yield call(UsersApi.getUsers, page * limit, limit, group_by);

    const { total, users } = res.data

    console.log("Users: ", users)

    yield put(setCount(total))
    yield put(fethcUsersSuccess(users));
  } catch (error) {
    yield put(fethcUsersFailure())
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsersSaga);
}