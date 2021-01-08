import React from "react";
// Importando estilos do componente.
import estilos from "./Intervalo.module.css";
// Importando componentes da interface;
import Card from "../Card/Card.jsx";

const Intervalo = () => {
    return (
        <Card title="Intervalo de Números" color="red" classExtra={estilos.Intervalo} >
            <label>
                <strong>Mínimo:</strong>
                <input type="number" value={0} readOnly />
            </label>

            <label>
                <strong>Máximo:</strong>
                <input type="number" value={10} readOnly />
            </label>
        </Card>
    );
};

export default Intervalo;
