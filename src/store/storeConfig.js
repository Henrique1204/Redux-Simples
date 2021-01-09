// Importando utilitários do Redux.
import { createStore, combineReducers } from "redux";
// Importando reducers.
import numeros from "./actions/numeros.js";

const reducer = combineReducers({
    numeros,
    nomes: (state, action) => ["Paulo", "Henrique", "Silva"]
});

const store = createStore(reducer);

export default store;
