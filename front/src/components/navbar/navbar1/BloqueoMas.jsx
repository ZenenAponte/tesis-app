import CausaList from '../../listas/CausaList'
import CausaDescripList from '../../listas/CausaDescripList'
import React from 'react'
import { Container, Typography } from '@mui/material'

export default function BloqueoMas() {
    return (
        <Container >
            <Typography variant='h4' textAlign='center' marginTop='3rem' >Tablas Con Información de los Bloqueos</Typography>
            <Container
                style={{
                    // display: 'flex'
                }}
            >
                <div>
                    <CausaList />
                </div>
                <div>
                    <CausaDescripList />
                </div>

            </Container>

        </Container>
    )
}