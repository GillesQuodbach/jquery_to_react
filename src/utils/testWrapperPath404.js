import React from "react";
import { render as rtlRenderWithPath } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "../store/employees/employees-slice";
import { statesSlice } from "../store/states/states-slice";
import { departmentsSlice } from "../store/departments/department-slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const persistConfig = {
  //tout sera stocké dans la clé root
  key: "root",
  //une version est obligatoire
  version: 1,
  //l'endroit ou l'on veut stocker (ici dans le storage)
  storage,
  // tout ce qui EST présent dans la whitelist est persisté
  // whitelist:['employees']
  // tout ce qui N'EST PAS présent dans la whitelist est persisté
  // blacklist:['employees']
};
//On combine toutes les slices dans un même reducer
const rootReducers = combineReducers({
  employees: employeesSlice.reducer,
  states: statesSlice.reducer,
  departments: departmentsSlice.reducer,
});

//On "persist" le nouveau reducer
const persistedReducers = persistReducer(persistConfig, rootReducers);
export function renderWithPath404(ui, options) {
  const store = configureStore({
    reducer: { persistedReducers },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  function Wrapper({ children }) {
    return (
      <MemoryRouter initialEntries={["/wrongpage"]}>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {children}
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );
  }
  rtlRenderWithPath(ui, { wrapper: Wrapper });
}
