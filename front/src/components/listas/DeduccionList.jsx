import { Button, Card, CardContent, Container, Typography, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DeduccionList() {

  const [deduccions, setDeduccions] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 4; // Máximo de elementos por página


  const navegate = useNavigate()

  const loadDeduccion = async () => {
    const response = await fetch('http://localhost:4000/deduccion')
    const data = await response.json()
    setDeduccions(data)
  }



  const handleDelete = async (id_deduc) => {
    try {
      const res = await fetch(`http://localhost:4000/deduccion/${id_deduc}`, {
        method: "DELETE",
      })
      console.log(res)
      setDeduccions(deduccions.filter(lugar => lugar.id_deduc !== id_deduc));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadDeduccion()
  }, [])


  // Filtrar lugares según el término de búsqueda
  const filteredDeduccions = deduccions.filter((deduccion) =>
    deduccion.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular elementos para la página actual
  const totalPages = Math.ceil(filteredDeduccions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDeduccions = filteredDeduccions.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container style={{ width: '50%', margin: '0 auto', padding: '2rem 0' }} >

      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>


          <Typography variant="h5" sx={{ flexGrow: 1 }}>Lista de Deducciones</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navegate('/deduccion/new')}
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

        {currentDeduccions.map((deduccion) => (
          <Card style={{
            marginBottom: ".8rem",
            backgroundColor: "GrayText"
          }}
            key={deduccion.id_deduc}
          >
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography>{deduccion.tipo}</Typography>
              </div>
              <div>
                <Typography>{deduccion.cantidad}</Typography>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navegate(`/deduccion/${deduccion.id_deduc}/edit`)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
                      handleDelete(deduccion.id_deduc);
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