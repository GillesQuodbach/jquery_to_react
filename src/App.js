import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </LocalizationProvider>
  );
}

export default App;
