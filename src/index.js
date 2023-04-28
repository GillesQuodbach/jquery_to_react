import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import CreateEmployee from "./views/CreateEmployee/CreateEmployee";
import EmployeeList from "./views/EmployeeList/EmployeeList";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DevSupport ComponentPreviews={ComponentPreviews}
                                                         useInitialHook={useInitial}
                    >
                        <App/>
                    </DevSupport>}>
                        <Route path="/" element={<CreateEmployee/>}/>
                        <Route path="/list" element={<EmployeeList/>}/>
                        <Route path="/*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
