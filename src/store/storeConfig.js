// Importando utilitários do Redux.
import { createStore, combineReducers } from "redux";
// Importando reducers.
import numeros from "./numeros.js";

// Combinando reducers para criar um único reducer.
const reducer = combineReducers({ numeros });
// Criando a store do Redux.
const store = createStore(reducer);

export default store;
