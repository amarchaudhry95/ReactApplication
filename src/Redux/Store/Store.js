import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducer/Reducer.js";
import { customMiddleWare } from "../../Middleware/AppMiddleware";

const middlewares = [customMiddleWare];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));
export default store;
