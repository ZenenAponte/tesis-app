import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'

export default function Lugar() {
    return (
        <Container style={{ direction: 'column' }}>
            <Card
                sx={{ mt: 5 }}
                style={{ backgroundColor:'lightgrey'}}

            >
                <Typography variant='5' textAlign={'center'} padding={'1 rem'} >
                    Añade un Lugar
                </Typography>
                <CardContent>
                    <form>
                        <TextField
                            variant='filled'
                            label='Escriba un Lugar'
                            sx={{
                                display: 'block',
                                margin: '5 rem 0'
                            }}
                        />
                        <Button variant='contained' color='primary' type='submit' >
                            Añadir
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}
