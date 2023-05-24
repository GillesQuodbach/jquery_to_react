import "./App.css";

import { Outlet } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Outlet />
      </div>
    </LocalizationProvider>
  );
}

export default App;
