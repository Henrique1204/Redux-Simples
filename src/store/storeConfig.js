import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
    mumeros: (state, action) => ({ min: 1, max: 10 }),
    nomes: (state, action) => ["Paulo", "Henrique", "Silva"]
});

const store = createStore(reducer);

export default store;
