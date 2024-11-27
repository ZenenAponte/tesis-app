import { Button, Card, CardContent, Container, Typography, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CausaDescripList() {

  const [causaDescrip, setCausaDescrips] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 4; // Máximo de elementos por página


  const navegate = useNavigate()

  const loadCausaDescrip = async () => {
    const response = await fetch('http://localhost:4000/causaDescrip')
    const data = await response.json()
    setCausaDescrips(data)
  }



  const handleDelete = async (id_causa_descrip) => {
    try {
      const res = await fetch(`http://localhost:4000/causaDescrip/${id_causa_descrip}`, {
        method: "DELETE",
      })
      console.log(res)
      setCausaDescrips(causaDescrip.filter(causaDescrip => causaDescrip.id_causa_descrip !== id_causa_descrip));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadCausaDescrip()
  }, [])

    
    // Filtrar lugares según el término de búsqueda
    const filteredCausa = causaDescrip.filter((causaDescrip) =>
      causaDescrip.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Calcular elementos para la página actual
    const totalPages = Math.ceil(filteredCausa.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCausa = filteredCausa.slice(startIndex, startIndex + itemsPerPage);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container style={{ width: '50%', margin: '0 auto', padding: '2rem 0' }} >

      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>


          <Typography variant="h5" sx={{ flexGrow: 1 }}>Descripciones de las Causas</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navegate('/causaDescrip/new')}
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

        {currentCausa.map((causaDescrip) => (
          <Card style={{
            marginBottom: ".8rem",
            backgroundColor: "GrayText"
          }}
            key={causaDescrip.id_causa_descrip}
          >
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography>{causaDescrip.tipo}</Typography>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navegate(`/causaDescrip/${causaDescrip.id_causa_descrip}/edit`)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
                      handleDelete(causaDescrip.id_causa_descrip);
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