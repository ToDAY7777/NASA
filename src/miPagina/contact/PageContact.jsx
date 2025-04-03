import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import Box from "@mui/material/Box";


    export  function PageContact (){
        const [formData, setFormData] = useState({
            nombre: '',
            correo: '',
            telefono:''
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Datos a guardar \nNombre: ${formData.nombre} \nCorreo: ${formData.correo}  \nTelefono: ${formData.telefono}`);
          };

        return(
            <Box sx={{bgcolor: "white", color:"black", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, maxHeight: "80vh",  boxShadow: 24, p: 4, borderRadius: 2, overflowY: "auto", }} >
            <Container padding={4} spacing={4}>

      <Typography variant="h6" gutterBottom> Formulario de Contacto </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          fullWidth
          margin="normal"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <Button variant="contained"  type="submit" sx={{bgcolor:"orange"}}>
          Enviar
        </Button>
      </form>
    </Container>
    </Box>
  );
        
    }




export default PageContact;
