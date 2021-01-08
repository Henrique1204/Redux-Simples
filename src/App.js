import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Intervalo from "./Componentes/Intervalo/Intervalo.jsx";
import Media from "./Componentes/Media.jsx";
import Soma from "./Componentes/Soma.jsx";
import Sorteio from "./Componentes/Sorteio.jsx";

const App = () => {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className="linha">
        <Intervalo />
      </div>
  
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
};

export default App;
