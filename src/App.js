import logo from './logo.svg';
import './App.css';
import { Route ,Routes,BrowserRouter} from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Dashboard/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
