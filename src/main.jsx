
import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.jsx";
import "./index.css";
import store from "./redux/app/Store.js";
import routes from "./routes/routes.jsx";

let persistor = persistStore(store);

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

