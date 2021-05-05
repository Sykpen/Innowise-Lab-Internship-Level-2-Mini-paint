import { takeEvery, call, put } from "redux-saga/effects";
import { rsf } from "../Utils/firebase";
import {
  SET_CURRENT_USER_DATA,
  setCurrentUserData,
  GET_CURRENT_USER_DATA,
  getCurrentUserData,
  storeUserData,
} from "../actions/dataActions";

import {dataInterface} from '../Types/dataTypes'

function* setCurrentUserDataToFirebase({
  data,
  userId,
}: ReturnType<typeof setCurrentUserData>) {
  try {
    yield call(rsf.database.create, `${userId}`, { data });
  } catch (error) {
    console.log(error);
  }
}

function* getCurrentUserDataFromFirebase({
  userId,
}: ReturnType<typeof getCurrentUserData>) {
  try {
    const currentuserData: dataInterface = yield call(rsf.database.read, `${userId}`);
    yield put(storeUserData(currentuserData));
  } catch (error) {
    console.log(error);
  }
}

export function* dataWatcher() {
  yield takeEvery(SET_CURRENT_USER_DATA, setCurrentUserDataToFirebase);
  yield takeEvery(GET_CURRENT_USER_DATA, getCurrentUserDataFromFirebase);
}
