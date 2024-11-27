import TipoImpuList from '../../listas/TipoImpuList'
import TipoDescList from '../../listas/TipoDescList'
import FormaList from '../../listas/FormaList'
import React from 'react'
import { Container, Typography } from '@mui/material'

export default function ImpuestoMas() {
  return (
    <Container >



      <Typography variant='h4' textAlign='center' marginTop='3rem' >Tablas Con Información de los Impuestos</Typography>
      
      <Container 
        style={{
         // display: 'flex'
        }}
      >
        <div>
          <TipoImpuList />
        </div>
        <div>
          <TipoDescList/>
        </div>
        <div>
          <FormaList/>
        </div>

      </Container>


    </Container>
  )
}