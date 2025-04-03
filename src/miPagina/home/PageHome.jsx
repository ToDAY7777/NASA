import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";

export default function RecetaDestacada() {
  const [recetas, setRecetas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchRecetas() {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await response.json();
        setRecetas(data.meals || []);
      } catch (error) {
        console.error("Error al obtener las recetas:", error);
      }
    }

    fetchRecetas();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recetas.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [recetas]);

  if (recetas.length === 0) {
    return <Typography variant="h5" align="center">Cargando recetas...</Typography>;
  }

  const receta = recetas[currentIndex];

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${receta.strMealThumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Capa oscura para mejorar el contraste */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Mayor oscurecimiento
        }}
      />

      <Box sx={{ zIndex: 1, padding: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            textShadow: "2px 2px 10px rgba(0,0,0,0.9)",
            fontWeight: "bold",
          }}
        >
          {receta.strMeal}
        </Typography>

        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: "#ff5722",
            color: "white",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e64a19" },
          }}
          onClick={() => window.open(`https://www.themealdb.com/meal/${receta.idMeal}`, "_blank")}
        >
          Leer
        </Button>
      </Box>
    </Box>
  );
}
