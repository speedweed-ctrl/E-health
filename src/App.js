import DemandeCert from "./pages/DemandeCert";
import GetCer from "./pages/GetCer";
import Products from "./pages/Products";
import {  Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path='shop' element={<Products/>}/>
      <Route path='Demande' element={<DemandeCert/>}/>
      <Route path="getcert" element={<GetCer/>}/>
    </Routes>
    </>
  );
}

export default App;
