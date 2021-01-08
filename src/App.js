import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Intervalo from "./Componentes/Intervalo/Intervalo.jsx";
import Media from "./Componentes/Media.jsx";
import Soma from "./Componentes/Soma.jsx";
import Sorteio from "./Componentes/Sorteio.jsx";

const App = () => {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(10);

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className="linha">
        <Intervalo min={min} setMin={setMin} max={max} setMax={setMax}  />
      </div>
  
      <div className="linha">
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
};

export default App;
