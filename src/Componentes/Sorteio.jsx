import React from "react";
// Importando componentes da interface.
import Card from "./Card/Card.jsx";

const Sorteio = ({ min, max }) => {
    return (
        <Card title="Média dos Números" color="purple" >
            <p>Resultado: <strong>{Math.round((Math.random() * (max - min)) + min)}</strong></p>
        </Card>
    );
};

export default Sorteio;
