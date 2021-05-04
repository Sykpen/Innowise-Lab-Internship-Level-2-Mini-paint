import { takeEvery, call } from "redux-saga/effects";
import { rsf } from "../Utils/firebase";
import {
  SET_CURRENT_USER_DATA,
  setCurrentUserData,
} from "../actions/dataActions";

function* setCurrentUserDataToFirebase({
  data,
  userId,
}: ReturnType<typeof setCurrentUserData>) {
  try {
    console.log(rsf.database);
    yield call(rsf.database.create, `${userId}`, { data });
  } catch (error) {
    console.log(error);
  }
}

export function* dataWatcher() {
  yield takeEvery(SET_CURRENT_USER_DATA, setCurrentUserDataToFirebase);
}
