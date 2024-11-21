import React from 'react'
import Home from './components/Home'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Lugar from './components/formularios/Lugar.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lugar' element={<Lugar />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}