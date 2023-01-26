import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Sidebar } from "./Sidebar/Sidebar";
import { MainMap } from "./MapElements/MainMap";
import { MainPage } from "./Pages/MainPage";
import { Legend } from "chart.js";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
