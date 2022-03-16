import {all} from 'redux-saga/effects';
import userSaga from './userSaga';
import todoSaga from './todoSaga';

function* rootSaga() {
  yield all([userSaga(), todoSaga()]);
}
export default rootSaga;
