import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./employees/employees-slice";
import { statesSlice } from "./states/states-slice";
import { departmentsSlice } from "./departments/department-slice";
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

//Config de persist
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

const store = configureStore({
  reducer: { persistedReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
