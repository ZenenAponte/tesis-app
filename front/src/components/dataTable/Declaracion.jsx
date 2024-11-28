import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, IconButton, Box, Tooltip } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Declaracion = () => {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState('');

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'telefono', headerName: 'Teléfono', width: 150 },
    { field: 'direccion', headerName: 'Dirección', width: 200 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Editar">
            <IconButton color="primary" onClick={() => handleEdit(params.row)}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Ver Detalles">
            <IconButton color="secondary" onClick={() => handleView(params.row)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  // Función para manejar edición
  const handleEdit = (row) => {
    alert(`Editando registro con ID: ${row.id}`);
  };

  // Función para manejar visualización de detalles
  const handleView = (row) => {
    alert(`Viendo detalles del registro con ID: ${row.id}`);
  };

  // Manejar búsqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filtrar datos según búsqueda
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // Simulación de datos iniciales
  useEffect(() => {
    setRows([
      { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', telefono: '123456789', direccion: 'Calle Falsa 123' },
      { id: 2, nombre: 'María López', email: 'maria.lopez@example.com', telefono: '987654321', direccion: 'Avenida Siempre Viva 742' },
      { id: 3, nombre: 'Carlos Gómez', email: 'carlos.gomez@example.com', telefono: '456789123', direccion: 'Boulevard Central 456' },
      { id: 4, nombre: 'Ana García', email: 'ana.garcia@example.com', telefono: '789123456', direccion: 'Paseo de la Reforma 678' },
      { id: 5, nombre: 'Pedro Rodríguez', email: 'pedro.rodriguez@example.com', telefono: '321654987', direccion: 'Ruta 66' },
    ]);
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <TextField
          label="Buscar"
          variant="outlined"
          size="small"
          onChange={handleSearch}
          style={{ width: '300px' }}
        />
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Declaracion;
