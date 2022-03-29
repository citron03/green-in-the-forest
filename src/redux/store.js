import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// redux-thunk 사용

const store = createStore(reducer, applyMiddleware(thunk)); // thunk 미들웨어 설정

export default store;