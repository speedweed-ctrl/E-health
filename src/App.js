import Products from "./pages/Products";
import {  Routes,Route } from 'react-router-dom'
import Login from "./pages/Auth/Login";
import PrimarySearchAppBar from "./components/Header";
import Home from './pages/home'

function App() {
  return (
    <>
    <PrimarySearchAppBar></PrimarySearchAppBar>
    <Routes>
      <Route path='track' element={<Products/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
