import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/Store.js";
import { Helmet, HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <ChakraProvider>
      <Provider store={store}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
      </Provider>
    </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
