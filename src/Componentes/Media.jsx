import React from "react";
// Importando componentes da interface.
import Card from "./Card/Card.jsx";
// Importando utilitários do Redux.
import { connect } from "react-redux";

const Media = ({ min, max }) => {
    return (
        <Card title="Média dos Números" color="green" >
            <p>Resultado: <strong>{(min + max) / 2}</strong></p>
        </Card>
    );
};

// Mapeando os valores do state global e passando como propriedade pro componente.
const mapStateToProps = ({ numeros }) => ({ min: numeros.min, max: numeros.max }); 

// Conectando o componente ao contexto do Redux.
export default connect(mapStateToProps)(Media);
