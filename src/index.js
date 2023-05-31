import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import CreateEmployee from "./views/CreateEmployee/CreateEmployee";
import EmployeeList from "./views/EmployeeList/EmployeeList";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<CreateEmployee />} />
              <Route path="/list" element={<EmployeeList />} />
              <Route path="/*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
