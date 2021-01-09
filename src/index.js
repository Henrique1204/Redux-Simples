import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Importando componentes externos.
import { Provider } from "react-redux";
// Importando store.
import store from "./store/storeConfig.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider sotre={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
