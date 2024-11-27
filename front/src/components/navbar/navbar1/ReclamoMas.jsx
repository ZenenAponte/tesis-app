import LugarList from '../../listas/LugarList'
import EstadoList from '../../listas/EstadoLit'
import SolEspList from '../../listas/SolEspList'
import React from 'react'
import { Container, Typography } from '@mui/material'

export default function ReclamoMas() {
  return (
    <Container >



      <Typography variant='h4' textAlign='center' marginTop='3rem' >Tablas Con Información de Reclamos</Typography>
      
      <Container 
        style={{
         // display: 'flex'
        }}
      >
        <div>
          <LugarList />
        </div>
        <div>
          <SolEspList />
        </div>
        <div>
          <EstadoList/>
        </div>

      </Container>


    </Container>
  )
}
