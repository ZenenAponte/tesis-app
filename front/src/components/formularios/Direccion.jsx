import { Button, Card, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Direccion() {

    const [direccion, setDireccion] = useState({
        nombre:'',
        numero:'',
        calle1:'',
        calle2:'',
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const navegate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        if (editing) {
            await fetch(`http://localhost:4000/direccion/`, {
                method: 'PUT',
                headers: {
                    "Contenet-Type": "applicaion/json",
                },
                body: JSON.stringify(direccion),
            });

        } else {
            await fetch('http://localhost:4000/direccion', {
                method: 'POST',
                body: JSON.stringify(direccion),
                headers: { 'Content-Type': 'application/json' },
            })

        }

        setLoading(false)
        navegate('/ContribuyenteMas')
    }

    const handleChange = (e) => {
        setDireccion({ ...direccion, [e.target.name]: e.target.value });
    }

    const loadUnDireccion = async (id_direcc) => {
        const res = await fetch(`http://localhost:4000/direccion/${id_direcc}`)
        const data = await res.json()
        console.log(data)
        //setDireccion({ direccion: data.direccion })
        //setEditing(true)
    };




    useEffect(() => {
        if (params.id_direcc) {
            loadUnDireccion(params.id_direcc);
        }
    }, [params.id_direcc]);




    return (
        <Container style={{  width: '56%', margin: '0 auto', padding: '2rem 0'}}>
            <Card
                sx={{ mt: 5 }}
                style={{
                    backgroundColor: 'darkgray',
                    padding: "1 rem"
                }}

            >
                <Typography variant='h5' textAlign={'center'} padding={'5 rem'} >
                    {editing ? "Editar Dirección" : "Añadir una Dirección"}
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name='nombre'
                            value={direccion.nombre}
                            variant='filled'
                            label='Escriba el Nombre de la Calle'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            name='numero'
                            value={direccion.numero}
                            variant='filled'
                            label='Escriba el #'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            name='calle1'
                            value={direccion.calle1}
                            variant='filled'
                            label='Escriba la 1era Calle'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            name='calle2'
                            value={direccion.calle2}
                            variant='filled'
                            label='Escriba la 2da Calle'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />

                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>

                        <Button variant='contained' color='primary' type='submit' disabled={
                            !direccion.nombre || !direccion.numero || !direccion.calle1
                        }>
                            {loading ? <CircularProgress
                                color='inherit'
                                size={24}

                            /> : 'Guardar'}
                        </Button>
                        <Button
                            variant='contained' color='error' onClick={() => navegate('/ContribuyenteMas')}
                        > 
                            Cancelar
                        </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}