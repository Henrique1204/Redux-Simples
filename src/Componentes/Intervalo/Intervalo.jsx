import React from "react";
// Importando estilos do componente.
import estilos from "./Intervalo.module.css";
// Importando componentes da interface;
import Card from "../Card/Card.jsx";
// Importando utilitários do Redux.
import { connect } from "react-redux";
// Importando actions.
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../../store/actions/numeros.js";

const Intervalo = ({ min, max, alterarMin, alterarMax }) => {
    return (
        <Card title="Intervalo de Números" color="red" classExtra={estilos.Intervalo} >
            <label>
                <strong>Mínimo:</strong>
                <input type="number" value={min} onChange={({ target }) => alterarMin(Number(target.value))} />
            </label>

            <label>
                <strong>Máximo:</strong>
                <input type="number" value={max} onChange={({ target }) => alterarMax(Number(target.value))} />
            </label>
        </Card>
    );
};

// Mapeando os valores do state global e passando como propriedade pro componente.
const mapStateToProps = ({ numeros }) => ({ min: numeros.min, max: numeros.max });

// Mepeando os dispatch e passando como propriedade pro componente.
const mapDispatchToProps = (dispatch) => ({
    alterarMin(payload) {
        dispatch(alterarNumeroMinimo(payload));
    },
    alterarMax(payload) {
        dispatch(alterarNumeroMaximo(payload));
    }
});

// Conectando o componente ao contexto do Redux.
export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
