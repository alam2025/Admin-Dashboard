import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/Store.js";
import { PersistGate } from "redux-persist/integration/react"
import {persistStore} from "redux-persist"
let persistor = persistStore(store)
import {  HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <ChakraProvider>
      <Provider store={store}>
      <RouterProvider router={routes}>
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </RouterProvider>
      </Provider>
    </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
