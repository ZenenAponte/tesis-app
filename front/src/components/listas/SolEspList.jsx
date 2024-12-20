import { Button, Card, CardContent, Container, Typography, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SolEspList() {

  const [solEsp,setSolEsp ] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 4; // Máximo de elementos por página


  const navegate = useNavigate()

  const loadSolEsp = async () => {
    const response = await fetch('http://localhost:4000/solEsp')
    const data = await response.json()
    setSolEsp(data)
  }



  const handleDelete = async (id_sol_esp) => {
    try {
      const res = await fetch(`http://localhost:4000/solEsp/${id_sol_esp}`, {
        method: "DELETE",
      })
      console.log(res)
      setSolEsp(solEsp.filter(solEsp => solEsp.id_sol_esp !== id_sol_esp));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadSolEsp()
  }, [])


  // Filtrar lugares según el término de búsqueda
  const filteredLugars = solEsp.filter((solEsp) =>
    solEsp.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular elementos para la página actual
  const totalPages = Math.ceil(filteredLugars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLugars = filteredLugars.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container style={{ width: '50%', margin: '0 auto', padding: '2rem 0' }} >

      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>


          <Typography variant="h5" sx={{ flexGrow: 1 }}>Lista de Solicitudes</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navegate('/solEsp/new')}
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

        {currentLugars.map((solEsp) => (
          <Card style={{
            marginBottom: ".8rem",
            backgroundColor: "GrayText"
          }}
            key={solEsp.id_sol_esp}
          >
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography>{solEsp.tipo}</Typography>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navegate(`/solEsp/${solEsp.id_sol_esp}/edit`)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
                      handleDelete(solEsp.id_sol_esp);
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