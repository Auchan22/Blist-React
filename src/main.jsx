import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ModalProvider } from "./Context/ModalContext";
import { InputProvider } from "./Context/InputContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ModalProvider>
        <InputProvider>
          <Router>
            <App />
          </Router>
        </InputProvider>
      </ModalProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
