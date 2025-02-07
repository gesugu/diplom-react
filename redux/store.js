import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";
import { storeSlicer } from "./StoreSlicer";

const rootReducer = combineReducers({
    storeSlicer
})
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
