import { all } from "redux-saga/effects";
import {authorizationWatcher} from './authorizationSaga'
import {dataWatcher} from './dataSaga'

export default function* rootSaga() {
    yield all([authorizationWatcher(), dataWatcher()]);
  }
  