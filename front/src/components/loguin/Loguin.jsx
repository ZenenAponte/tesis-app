import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { text } from "express";
import { useAuth } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, errors: loginErrors, isAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleLogin = () => {
    // Aquí puedes añadir la lógica de autenticación
    console.log("Nombre:", nombre);
    console.log("Password:", password);
    signIn({ userName: nombre, password: password })
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {loginErrors.map((error, i) => (
          <div
            className=" bg-rose-500 text-white bg-red-400 p-2 rounded-2xl mx-auto w-2/3"
            key={i}
          >
            {error}
          </div>
        ))}
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={text}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
