import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contribuyente from './components/contribuyente';
import Otro from './components/otro';
import Home from './components/home';
import ReclaMas from './components/reclaMas';
import Impu_mas from './components/impuMas';
import DeclaMas from './components/declaMas';
import Prueba from './components/Prueba';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contribuyente" element={<Contribuyente />} />
          <Route path="/otro" element={<Otro />} />
          <Route path="/recla_mas" element={<ReclaMas />} />
          <Route path="/impu_mas" element={<Impu_mas />} />
          <Route path="/decla_mas" element={<DeclaMas />} />
          <Route path="/prueba" element={<Prueba/>} />
        
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;

