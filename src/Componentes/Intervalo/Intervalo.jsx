import React from "react";
// Importando estilos do componente.
import estilos from "./Intervalo.module.css";
// Importando componentes da interface;
import Card from "../Card/Card.jsx";

const Intervalo = ({ min, setMin, max, setMax }) => {
    return (
        <Card title="Intervalo de Números" color="red" classExtra={estilos.Intervalo} >
            <label>
                <strong>Mínimo:</strong>
                <input type="number" value={min} onChange={({ target }) => setMin(Number(target.value))} />
            </label>

            <label>
                <strong>Máximo:</strong>
                <input type="number" value={max} onChange={({ target }) => setMax(Number(target.value))} />
            </label>
        </Card>
    );
};

export default Intervalo;
