import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Card from "./Componentes/Card/Card.jsx";
import Intervalo from "./Componentes/Intervalo/Intervalo.jsx";

const App = () => {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className="linha">
        <Intervalo />
      </div>
  
      <div className="linha">
      <Card title="Card 2" color="blue" >B</Card>
        <Card title="Card 3" color="red" >C</Card>
        <Card title="Card 4" color="green" >D</Card>
      </div>
    </div>
  );
};

export default App;
