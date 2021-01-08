import React from "react";
// Importando componentes da interface.
import Card from "./Card/Card.jsx";

const Soma = ({ min, max }) => {
    return (
        <Card title="Soma dos Números" color="blue" >
            <p>Resultado: <strong>{min + max}</strong></p>
        </Card>
    );
};

export default Soma;
