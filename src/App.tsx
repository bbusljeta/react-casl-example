import "./css/app.css";
import "normalize.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routing } from "./modules/routing";
import { ability, AbilityContext } from "./modules/authorization";
import { store } from "./modules/store";

function App() {
  return (
    <Provider store={store}>
      <AbilityContext.Provider value={ability}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AbilityContext.Provider>
    </Provider>
  );
}

export default App;
