import logo from './logo.svg';
import './App.css';
import Login from './views/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './views/Menu/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
