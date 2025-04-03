import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function PageInfo() {
  const { id } = useParams(); // Obtiene el id de la URL
  const [receta, setReceta] = useState(null);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" fontWeight="bold">{receta.strMeal}</Typography>
      <img src={receta.strMealThumb} alt={receta.strMeal} style={{ width: "100%", maxWidth: 400, borderRadius: 10 }} />
      
      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2, color: "orange" }}>Ingredientes:</Typography>
      {Array.from({ length: 20 }, (_, i) => {
        const ingredient = receta[`strIngredient${i + 1}`];
        const measure = receta[`strMeasure${i + 1}`];
        return ingredient ? (
          <Typography key={i} variant="body1">
            - {measure} {ingredient}
          </Typography>
        ) : null;
      })}

      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2, color: "orange" }}>Receta:</Typography>
      <Typography variant="body1">{receta.strInstructions}</Typography>

      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2, color: "orange" }}>Video:</Typography>
      <Button variant="contained" color="primary" onClick={() => window.open(receta.strYoutube, "_blank")}>
        Ver en YouTube
      </Button>
    </Container>
  );
}
