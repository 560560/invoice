import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth-reducer"
import terminalsReducer from "./terminals-reducer"
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    auth: authReducer,
    terminalsPage: terminalsReducer,

})


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store