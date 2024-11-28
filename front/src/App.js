import React from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import ReclamoMas from "./components/navbar/navbar1/ReclamoMas.jsx";
import LugarList from "./components/listas/LugarList.jsx";
import Lugar from "./components/formularios/Lugar.jsx";
import SolEsp from "./components/formularios/SolEsp.jsx";
import SolEspList from "./components/listas/SolEspList.jsx";
import Estado from "./components/formularios/Estado.jsx";
import EstadoList from "./components/listas/EstadoLit.jsx";

import ImpuestoMas from "./components/navbar/navbar1/ImpuestoMas.jsx";
import TipoImpu from "./components/formularios/TipoImpu.jsx";
import TipoImpuList from "./components/listas/TipoImpuList.jsx";
import TipoDesc from "./components/formularios/TipoDesc.jsx";
import TipoDescList from "./components/listas/TipoDescList.jsx";
import Forma from "./components/formularios/Forma.jsx";
import FormaList from "./components/listas/FormaList.jsx";

import DeclaracionMas from "./components/navbar/navbar1/DeclaracionMas.jsx";
import Ingresos from "./components/formularios/Ingresos.jsx";
import IngresosList from "./components/listas/IngresosList.jsx";
import Deduccion from "./components/formularios/Deduccion.jsx";
import DeduccionList from "./components/listas/DeduccionList.jsx";

import BloqueoMas from "./components/navbar/navbar1/BloqueoMas.jsx";
import CausaDescrip from "./components/formularios/CausaDescrip.jsx";
import CausaDescripList from "./components/listas/CausaDescripList.jsx";
import Causa from "./components/formularios/Causa.jsx";
import CausaList from "./components/listas/CausaList.jsx";

import ContribuyenteMas from "./components/navbar/navbar1/ContribuyenteMas.jsx";
import DireccionList from "./components/listas/DireccionList.jsx";
import Direccion from "./components/formularios/Direccion.jsx";
import SexoList from "./components/listas/SexoList.jsx";
import Sexo from "./components/formularios/Sexo.jsx";

import Declaracion from "./components/dataTable/Declaracion.jsx";
import { ProtectedRoute } from "./protectedRouter.js";
import Login from "./components/loguin/Loguin.jsx";

import { AuthProvider } from "../src/context/auth.context.js";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              //ReclamoMas
              <Route path="/reclamoMas" element={<ReclamoMas />} />
              //Lugar
              <Route path="/lugar/new" element={<Lugar />} />
              <Route path="/lugar" element={<LugarList />} />
              <Route path="/lugar/:id_lugar/edit" element={<Lugar />} />
              //SolEsp
              <Route path="/solEsp/new" element={<SolEsp />} />
              <Route path="/solEsp" element={<SolEspList />} />
              //Estado
              <Route path="/estado/new" element={<Estado />} />
              <Route path="/estado" element={<EstadoList />} />
              //ImpuestoMas
              <Route path="/ImpuestoMas" element={<ImpuestoMas />} />
              //TipoImp
              <Route path="/tipoImp/new" element={<TipoImpu />} />
              <Route path="/tipo" element={<TipoImpuList />} />
              //TipoDesc
              <Route path="/tipoDesc/new" element={<TipoDesc />} />
              <Route path="/tipoDesc" element={<TipoDescList />} />
              //FormaPago
              <Route path="/forma/new" element={<Forma />} />
              <Route path="/forma" element={<FormaList />} />
              //DeclaracionMas
              <Route path="/DeclaracionMas" element={<DeclaracionMas />} />
              //Ingresos
              <Route path="/ingreso/new" element={<Ingresos />} />
              <Route path="/ingreso" element={<IngresosList />} />
              //Deduccion
              <Route path="/deduccion/new" element={<Deduccion />} />
              <Route path="/deduccion" element={<DeduccionList />} />
              //BloqueoMas
              <Route path="/BloqueoMas" element={<BloqueoMas />} />
              //Causa
              <Route path="/causa/new" element={<Causa />} />
              <Route path="/causa" element={<CausaList />} />
              //CausaDescrip
              <Route path="/causaDescrip/new" element={<CausaDescrip />} />
              <Route path="/causaDescrip" element={<CausaDescripList />} />
              //ContribuyenteMas
              <Route path="/ContribuyenteMas" element={<ContribuyenteMas />} />
              //Direccion
              <Route path="/direccion/new" element={<Direccion />} />
              <Route path="/direccion" element={<DireccionList />} />
              //Sexo
              <Route path="/sexo/new" element={<Sexo />} />
              <Route path="/sexo" element={<SexoList />} />
              //DataTable //Declaracion
              <Route path="/declaracionTabla" element={<Declaracion />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}
