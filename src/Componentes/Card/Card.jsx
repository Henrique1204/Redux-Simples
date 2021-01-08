import React from "react";
// Importando estilos do componente.
import estilos from "./Card.module.css";

const Card = ({ title, children, color }) => {
    return (
        <div className={`${estilos.Card} ${estilos[color] || estilos.default}`}>
            <div className={estilos.header}>
                <span className={estilos.title} >{title}</span>
            </div>

            <div className={estilos.content}>
                {children}
            </div>
        </div>
    );
};

export default Card;
