import { combineReducers } from "redux";
import {AuthorizationReducer} from './authrizationReduser'

export const rootReducer = combineReducers({
    authorization: AuthorizationReducer
});
