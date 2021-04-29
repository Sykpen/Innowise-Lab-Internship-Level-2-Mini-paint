import { loginUser } from './../actions/authorization';
import {REGISTER_NEW_USER, LOGIN_USER} from '../actions/authorization'
import { takeEvery, call,  all } from "redux-saga/effects";
import { rsf } from "../Utils/firebase";
import {registerNewUser} from '../actions/authorization'

function* registerNewUserWithFirebace({ email, password }: ReturnType<typeof registerNewUser>) {
  try {
    yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
  } catch (error) {
    console.log(error);
  }
}

function* loginUserWithFirebace({ email, password }: ReturnType<typeof loginUser>) {
  try {
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
  } catch (error) {
    console.log(error);
  }
}

export function* authorizationWatcher() {
  yield takeEvery(REGISTER_NEW_USER, registerNewUserWithFirebace);
  yield takeEvery(LOGIN_USER, loginUserWithFirebace);
}

export default function* rootSaga() {
  yield all([authorizationWatcher()]);
}
