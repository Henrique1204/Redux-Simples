import React from "react";
// Importando componentes da interface.
import Card from "./Card/Card.jsx";

const Media = ({ min, max }) => {
    return (
        <Card title="Média dos Números" color="green" >
            <p>Resultado: <strong>{(min + max) / 2}</strong></p>
        </Card>
    );
};

export default Media;
