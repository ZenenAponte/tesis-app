import React from 'react'
import { Container, Typography } from '@mui/material'
import DireccionList from '../../listas/DireccionList'
import SexoList from '../../listas/SexoList'

export default function ContribuyenteMas() {
    return (
        <Container >
            <Typography variant='h4' textAlign='center' marginTop='3rem' >Tablas Con Información de los Contribuyentes</Typography>
            <Container
                style={{
                    // display: 'flex'
                }}
            >
                <div>
                    <DireccionList />
                </div>
                <div>
                    <SexoList/>
                </div>

            </Container>

        </Container>
    )
}