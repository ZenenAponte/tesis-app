import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react'


const Place = () =>{
 const [lugar, setLugar]= useState({
    lugar: '',
 }) 
  

  
  const handleSubmit  = e =>{
    e.preventDefault();
  
    console.log("submit")
}
 
const handleChange = e =>
  setLugar(...lugar, [e.target.name], e.target.value);





    return (
    <div>
       <Container>
            <Card
                sx={{ mt: 15 }}
                style={{
                    backgroundColor: 'lightgrey',
                    padding: '1 rem'
                }}
            >
                <Typography variant='5' textAlign={'center'}  >
                    Crear Lugar
                </Typography>
                <CardContent>
                    <form onSubmit={ handleSubmit } > 
                        <TextField
                            variant='filled'
                            label='Escriba el Lugar'
                            sx={{
                                display: 'block', 
                                margin: '.5rem 0'

                            }}
                            name= "lugar"
                            onChange={ handleChange }

                        />
                        <Button variant='contained' color='primary' type='submit' >
                            Añadir
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    </div>
  )
}

export default Place





