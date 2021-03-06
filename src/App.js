import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

import "./config/ReactotronConfig";

import Routes from "./routes";
import history from "./services/history";

import { store, persistor } from "./store";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={10000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
