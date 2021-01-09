import React from "react";
// Importando componentes da interface.
import Card from "./Card/Card.jsx";
// Importando utilitários do Redux.
import { connect } from "react-redux";

const Sorteio = ({ min, max }) => {
    return (
        <Card title="Média dos Números" color="purple" >
            <p>Resultado: <strong>{ Math.round(Math.random() * (max - min) + min) }</strong></p>
        </Card>
    );
};

const mapStateToProps = ({ numeros }) => ({ min: numeros.min, max: numeros.max });

export default connect(mapStateToProps)(Sorteio);
