import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
      </LocalizationProvider>
  );
}

export default App;
