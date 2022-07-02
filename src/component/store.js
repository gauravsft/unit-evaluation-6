import { combineReducers, legacy_createStore as createStore } from "redux";
import {MovieReducer, UserReducer } from "../component/redux/reducer/homereducer";

const rootReducer=combineReducers({
    Movie:MovieReducer,
    User:UserReducer

});

export const store =createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)