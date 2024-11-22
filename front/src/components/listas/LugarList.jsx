import { Button, Card, CardContent, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LugarList() {

  const [lugars, setLugars] = useState([])

  const navegate = useNavigate()

  const loadLugar = async () => {
    const response = await fetch('http://localhost:4000/lugar')
    const data = await response.json()
    setLugars(data)
  }

  const handleDelete = async (id_lugar) => {
   try {
    await fetch('http://localhost:4000/lugar/${id_lugar}',{
      method: "DELETE",
    })
    setLugars(lugars.filter(lugar => lugar.id_lugar !== id_lugar));
   } catch (error) {
    console.log(error)
   }
  };

  useEffect(() => {
    loadLugar()
  }, [])

  return (
    <>
      <Typography sx={{flexGrow:1}}>Listar Lugares</Typography>
      <Button
      variant="contained"
      color="primary"
      onClick={() => navegate('/lugar/new')}

      
      >
        Añadir
      </Button>
      {lugars.map((lugar) => (
        <Card style={{
          marginBottom: ".8rem",
          backgroundColor: "GrayText"
        }}
        key={lugar.id_lugar}
        >
          <CardContent style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <div>
              <Typography>{lugar.lugar}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="warning"
                onClick={() => navegate('/lugar/&{lugar.id_lugar}/edit')}
              >
                Editar
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(lugar.id_lugar)}
                style={{
                  marginLeft: ".5rem"
                }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))
      }
    </>
  )
}

