const ALTERAR_NUMERO_MINIMO = "numeros/AlterarNumeroMinimo";
const ALTERAR_NUMERO_MAXIMO = "numeros/AlterarNumeroMaximo";

// Action Creator
export const alterarNumeroMinimo = (payload) => ({ type: ALTERAR_NUMERO_MINIMO, payload });
export const alterarNumeroMaximo = (payload) => ({ type: ALTERAR_NUMERO_MAXIMO, payload });

const initialState = { min: 1, max: 10 };

export default function numeros(state = initialState, action) {
    switch(action.type) {
        case ALTERAR_NUMERO_MINIMO: return { ...state, min: action.payload };
        case ALTERAR_NUMERO_MAXIMO: return { ...state, max: action.payload };
        default: return state;
    }
}
