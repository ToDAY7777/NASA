import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function ContenidoRecetas(props) {
  console.log("Data desde hijo:", props.data);

  const navigate = useNavigate(); // Hook para la navegación
  const [open, setOpen] = useState(false);
  const [selectedReceta, setSelectedReceta] = useState(null);

  const handleOpen = (receta) => {
    setSelectedReceta(receta);
    setOpen(true);
  };

  return (
    <div>
      {!props.data || props.data.length === 0 ? (
        <Typography variant="h6" color="initial"> No se encontraron resultados</Typography>
      ) : (
        <Grid container padding={4} spacing={4}>
          {props.data.map((receta, index) => (
            <Grid item key={index} xs={6} md={4} style={{ cursor: "pointer" }}>
              <Paper elevation={3} style={{ padding: 10 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <img src={receta.strMealThumb} alt={receta.strMeal} style={{ width: "100%", maxWidth: 350, borderRadius: 10 }} />
                  <Typography variant="h6" style={{ color: "#ff5722", fontSize: "1rem", fontWeight: "bold" }}> {receta.strMeal} </Typography>
                  <Typography variant="body2" color="textSecondary"> {receta.strCategory} </Typography>
                  <Typography variant="body2" color="textSecondary"> {receta.idMeal} - {receta.strArea} </Typography>
                  
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 2,
                      backgroundColor: "#ff5722",
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#e64a19" },
                    }}
                    onClick={() => navigate(`/receta/${receta.idMeal}`)} // Navegar a la página de detalles
                  >
                    Leer
                  </Button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal para detalles rápidos */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ bgcolor: "white", color: "black", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, maxHeight: "80vh", boxShadow: 24, p: 4, borderRadius: 2, overflowY: "auto" }}>
          {selectedReceta && (
            <>
              <Typography variant="h6" fontWeight="bold"> {selectedReceta.strMeal} </Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "orange" }}> Ingredientes: </Typography>
              {Array.from({ length: 20 }, (_, i) => {
                const ingredient = selectedReceta[`strIngredient${i + 1}`];
                const measure = selectedReceta[`strMeasure${i + 1}`];
                return ingredient ? (
                  <Typography key={i} variant="body1">
                    - {measure} {ingredient}
                  </Typography>
                ) : null;
              })}
              <Typography variant="h6" fontWeight="bold" sx={{ color: "orange" }}> Receta: </Typography>
              <Typography variant="body1">{selectedReceta.strInstructions}</Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "orange" }}> Video: </Typography>
              <Typography variant="body1" onClick={() => window.open(selectedReceta.strYoutube, "_blank")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
                Ver en YouTube
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
