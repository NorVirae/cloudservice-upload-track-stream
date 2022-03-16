import { Route, Routes } from 'react-router-dom';
import './App.css';
import FileManager from './pages/fileManager';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/file/manager"} element={<FileManager/>} />
        <Route path={"/folders/manager"} element={<FileManager/>} />


      </Routes>
    </>
  );
}

export default App;