import React from "react";
// Importando componentes da interface.
import Card from "./Card/Card.jsx";
// Importando utilitários do Redux.
import { connect } from "react-redux";

const Soma = ({ min, max }) => {
    return (
        <Card title="Soma dos Números" color="blue" >
            <p>Resultado: <strong>{ min + max }</strong></p>
        </Card>
    );
};

const mapStateToProps = ({ numeros }) => ({min: numeros.min, max: numeros.max});

export default connect(mapStateToProps)(Soma);
