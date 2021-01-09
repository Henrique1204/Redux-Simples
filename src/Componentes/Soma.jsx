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

// Mapeando os valores do state global e passando como propriedade pro componente.
const mapStateToProps = ({ numeros }) => ({min: numeros.min, max: numeros.max});

// Conectando o componente ao contexto do Redux.
export default connect(mapStateToProps)(Soma);
