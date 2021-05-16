import "./css/app.css";
import "normalize.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./modules/routing";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
