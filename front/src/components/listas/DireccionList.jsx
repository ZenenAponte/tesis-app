import { Button, Card, CardContent, Container, Typography, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DireccionList() {

  const [direccion, setDireccion] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 4; // Máximo de elementos por página


  const navegate = useNavigate()

  const loadDireccion = async () => {
    const response = await fetch('http://localhost:4000/direccion')
    const data = await response.json()
    setDireccion(data)
  }



  const handleDelete = async (id_direcc) => {
    try {
      const res = await fetch(`http://localhost:4000/direccion/${id_direcc}`, {
        method: "DELETE",
      })
      console.log(res)
      setDireccion(direccion.filter(direccion => direccion.id_direcc !== id_direcc));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadDireccion()
  }, [])


  // Filtrar lugares según el término de búsqueda
  const filteredDireccions = direccion.filter((direccion) =>
    direccion.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  

  // Calcular elementos para la página actual
  const totalPages = Math.ceil(filteredDireccions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDireccions = filteredDireccions.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container style={{ width: '70%', margin: '0 auto', padding: '2rem 0' }} >

      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>


          <Typography variant="h5" sx={{ flexGrow: 1 }}>Lista de Direcciones</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navegate('/direccion/new')}
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

        {currentDireccions.map((direccion) => (
          <Card style={{
            marginBottom: ".8rem",
            backgroundColor: "GrayText"
          }}
            key={direccion.id_direcc}
          >
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography>{direccion.nombre}</Typography>
              </div>
              <div>
                <Typography>{`#`+direccion.numero}</Typography>
              </div>
              <div>
                <Typography>{direccion.calle1}</Typography>
              </div>
              <div>
                <Typography>{direccion.calle2}</Typography>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navegate(`/direccion/${direccion.id_direcc}/edit`)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
                      handleDelete(direccion.id_direcc);
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