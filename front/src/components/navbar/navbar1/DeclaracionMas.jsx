import IngresosList from '../../listas/IngresosList'
import DeduccionList from '../../listas/DeduccionList'
import React from 'react'
import { Container, Typography } from '@mui/material'

export default function DeclaracionMas() {
  return (
    <Container >



      <Typography variant='h4' textAlign='center' marginTop='3rem' >Tablas Con Información de las Declaraciones</Typography>
      
      <Container 
        style={{
         // display: 'flex'
        }}
      >
        <div>
            <IngresosList/>
        </div>
        <div>
            <DeduccionList/>
        </div>

      </Container>


    </Container>
  )
}