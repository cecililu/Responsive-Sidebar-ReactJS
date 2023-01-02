import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Sidebar } from "./Sidebar/Sidebar";
import { MainMap } from "./MapElements/MainMap";
import { MainPage } from "./Pages/MainPage";
import { Legend } from "chart.js";

function App() {
  return (<>

    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
