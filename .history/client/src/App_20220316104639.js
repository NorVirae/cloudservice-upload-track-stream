import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        
      </Routes>
      <Route path='/' element={<Home/>} />
    </>
  );
}

export default App;
