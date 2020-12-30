import { all } from 'redux-saga/effects';
import { watchGetCarpetStatuses, watchGetCarpetTypes } from './CarpetRedux/sagas/carpetStatuses';
import { watchGetOrders } from './OrdersRedux/sagas/getOrdersSaga';
import { moveOrder, watchMoveOrder } from './OrdersRedux/sagas/moveOrderSaga';
import { watchFetchUsers } from './UsersRedux/sagas/FetchUsers';

export default function* rootSaga() {
  yield all([
    watchGetOrders(),
    watchMoveOrder(),
    watchFetchUsers(),
    watchGetCarpetStatuses(),
    watchGetCarpetTypes(),
  ])
}