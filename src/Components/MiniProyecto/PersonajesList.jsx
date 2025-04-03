import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

export function PersonajesList() {
  const [personajes, setPersonajes] = useState([
    { nombre: "Vi", edad: 24 },
    { nombre: "Jinx", edad: 21 },
    { nombre: "Caitlyn", edad: 23 },
    { nombre: "Jayce", edad: 31 },
  ]);

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", maxWidth: "500px", marginBottom: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}><strong>Nombre</strong></TableCell>
            <TableCell sx={{ color: "white" }}><strong>Edad</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {personajes.map((personaje, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: "white" }}>{personaje.nombre}</TableCell>
              <TableCell sx={{ color: "white" }}>{personaje.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
