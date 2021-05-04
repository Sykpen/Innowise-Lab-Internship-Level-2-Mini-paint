import { takeEvery, call } from "redux-saga/effects";
import { rsf } from "../Utils/firebase";
import {
  SET_CURRENT_USER_DATA,
  setCurrentUserData,
  GET_CURRENT_USER_DATA,
  getCurrentUserData,
} from "../actions/dataActions";

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

interface test {
    [id: string]: {data: string}
}

function* getCurrentUserDataFromFirebase({userId}: ReturnType<typeof getCurrentUserData>) {
    try {
        const currentuserData:test = yield call(rsf.database.read, `${userId}`);
        console.log(currentuserData)
    } catch (error) {
        console.log(error)
    }
}

export function* dataWatcher() {
  yield takeEvery(SET_CURRENT_USER_DATA, setCurrentUserDataToFirebase);
  yield takeEvery(GET_CURRENT_USER_DATA, getCurrentUserDataFromFirebase);
}
