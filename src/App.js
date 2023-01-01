import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Sidebar } from "./Sidebar/Sidebar";
import { MainMap } from "./MapElements/MainMap";

function App() {
  return (<>

    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
