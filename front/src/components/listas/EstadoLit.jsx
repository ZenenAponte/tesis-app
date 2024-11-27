import { Button, Card, CardContent, Container, Typography, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LugarList() {

  const [estado, setEstado] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 4; // Máximo de elementos por página


  const navegate = useNavigate()

  const loadEstado = async () => {
    const response = await fetch('http://localhost:4000/estado')
    const data = await response.json()
    setEstado(data)
  }



  const handleDelete = async (id_estado) => {
    try {
      const res = await fetch(`http://localhost:4000/estado/${id_estado}`, {
        method: "DELETE",
      })
      console.log(res)
      setEstado(estado.filter(estado => estado.id_estado !== id_estado));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadEstado()
  }, [])


  // Filtrar lugares según el término de búsqueda
  const filterdEstados = estado.filter((estado) =>
    estado.estado.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular elementos para la página actual
  const totalPages = Math.ceil(filterdEstados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEstados = filterdEstados.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container style={{ width: '50%', margin: '0 auto', padding: '2rem 0' }} >

      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>


          <Typography variant="h5" sx={{ flexGrow: 1 }}>Lista de Estados</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navegate('/estado/new')}
          >
            Añadir
          </Button>

        </div>

        {/* Barra de búsqueda */}
        <TextField
          variant="outlined"
          placeholder="Buscar..."
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "1.5rem" }}
        />

        {currentEstados.map((estado) => (
          <Card style={{
            marginBottom: ".8rem",
            backgroundColor: "GrayText"
          }}
            key={estado.id_estado}
          >
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography>{estado.estado}</Typography>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navegate(`/estado/${estado.id_estado}/edit`)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
                      handleDelete(estado.id_estado);
                    }
                  }}
                  style={{
                    marginLeft: ".5rem",
                  }}
                >
                  Eliminar
                </Button>

              </div>
            </CardContent>
          </Card>
        ))
        }
        {/* Paginación */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <Button
            variant="text"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </Button>
          <Typography style={{ margin: "0 1rem" }}>
            Página {currentPage} de {totalPages}
          </Typography>
          <Button
            variant="text"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Siguiente
          </Button>
        </div>
      </>
    </Container>
  )
}