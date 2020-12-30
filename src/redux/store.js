import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ordersReducer } from './OrdersRedux/reducer';
import { userReducer } from './UsersRedux/index';
import { carpetStatses } from './CarpetRedux/carpetStatusesReducer';

import rootSaga from './sagas';

import reduxThunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  orders: ordersReducer,
  users: userReducer,
  carpetStatuses: carpetStatses,
  form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  // compose(
  //   applyMiddleware(reduxThunk, sagaMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

//sagaMiddleware.run(rootSaga);

export default store;