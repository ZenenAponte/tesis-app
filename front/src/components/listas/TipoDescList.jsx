import { Button, Card, CardContent, Container, Typography, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TipoDescList() {

  const [tipos, setTipos] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 4; // Máximo de elementos por página


  const navegate = useNavigate()

  const loadTipo = async () => {
    const response = await fetch('http://localhost:4000/tipoDesc')
    const data = await response.json()
    setTipos(data)
  }



  const handleDelete = async (id_tipo_desc) => {
    try {
      const res = await fetch(`http://localhost:4000/tipoDesc/${id_tipo_desc}`, {
        method: "DELETE",
      })
      console.log(res)
      setTipos(tipos.filter(tipo => tipo.id_tipo_desc !== id_tipo_desc));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadTipo()
  }, [])


  // Filtrar tipoes según el término de búsqueda
  const filteredtipos = tipos.filter((tipo) =>
    tipo.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular elementos para la página actual
  const totalPages = Math.ceil(filteredtipos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currenttipos = filteredtipos.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container style={{ width: '50%', margin: '0 auto', padding: '2rem 0' }} >

      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>


          <Typography variant="h5" sx={{ flexGrow: 1 }}>Descripciones</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navegate('/tipoDesc/new')}
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

        {currenttipos.map((tipo) => (
          <Card style={{
            marginBottom: ".8rem",
            backgroundColor: "GrayText"
          }}
            key={tipo.id_tipo_desc}
          >
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography>{tipo.tipo}</Typography>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navegate(`/tipo/${tipo.id_tipo_desc}/edit`)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
                      handleDelete(tipo.id_tipo_desc);
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