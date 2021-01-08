import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Card from "./Componentes/Card/Card.jsx";

const App = () => {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className="linha">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
