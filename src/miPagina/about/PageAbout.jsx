import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper, Modal, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const ScrollContainer = styled("div")({
  display: "flex",
  overflowX: "auto",
  padding: "10px 0",
  gap: "10px",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export default function CategoriasRecetas() {
  const [categorias, setCategorias] = useState([]);
  const [recetas, setRecetas] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedReceta, setSelectedReceta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
        setCategorias(data.categories);
        fetchRecetasPorCategoria(data.categories);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    }

    async function fetchRecetasPorCategoria(categories) {
      let recetasPorCategoria = {};
      for (let category of categories) {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
          const data = await response.json();
          recetasPorCategoria[category.strCategory] = data.meals;
        } catch (error) {
          console.error(`Error al obtener recetas para ${category.strCategory}:`, error);
        }
      }
      setRecetas(recetasPorCategoria);
      setLoading(false);
    }

    fetchCategories();
  }, []);

  const handleOpen = async (receta) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${receta.idMeal}`);
      const data = await response.json();
      setSelectedReceta(data.meals[0]);
      setOpen(true);
    } catch (error) {
      console.error("Error al obtener detalles de la receta:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Categorías de Comidas
      </Typography>

      {loading ? (
        <CircularProgress style={{ display: "block", margin: "auto" }} />
      ) : (
        categorias.map((categoria) => (
          <div key={categoria.idCategory} style={{ marginBottom: 30 }}>
            <Typography variant="h5" style={{ color: "#ff5722", fontWeight: "bold" }}>
              {categoria.strCategory}
            </Typography>

            <ScrollContainer>
              {recetas[categoria.strCategory]?.map((receta) => (
                <Paper
                  key={receta.idMeal}
                  elevation={3}
                  style={{
                    padding: 10,
                    width: 200,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  onClick={() => handleOpen(receta)}
                >
                  <img src={receta.strMealThumb} alt={receta.strMeal} style={{ width: "100%", borderRadius: 10 }} />
                  <Typography variant="body1" style={{ fontWeight: "bold", textAlign: "center" }}>
                    {receta.strMeal}
                  </Typography>
                </Paper>
              ))}
            </ScrollContainer>
          </div>
        ))
      )}

      {/* Modal para mostrar detalles de la receta */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            bgcolor: "white",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            maxHeight: "80vh",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            overflowY: "auto",
          }}
        >
          {selectedReceta && (
            <>
              <Typography variant="h6" fontWeight="bold">
                {selectedReceta.strMeal}
              </Typography>
              <img
                src={selectedReceta.strMealThumb}
                alt={selectedReceta.strMeal}
                style={{ width: "100%", borderRadius: 10, marginBottom: 10 }}
              />
              <Typography variant="body2" color="textSecondary">
                {selectedReceta.strCategory} - {selectedReceta.strArea}
              </Typography>

              <Typography variant="h6" fontWeight="bold" sx={{ color: "orange", marginTop: 2 }}>
                Ingredientes:
              </Typography>
              {Array.from({ length: 20 }, (_, i) => {
                const ingredient = selectedReceta[`strIngredient${i + 1}`];
                const measure = selectedReceta[`strMeasure${i + 1}`];
                return ingredient ? (
                  <Typography key={i} variant="body1">
                    - {measure} {ingredient}
                  </Typography>
                ) : null;
              })}

              <Typography variant="h6" fontWeight="bold" sx={{ color: "orange", marginTop: 2 }}>
                Receta:
              </Typography>
              <Typography variant="body1">{selectedReceta.strInstructions}</Typography>

              <Typography variant="h6" fontWeight="bold" sx={{ color: "orange", marginTop: 2 }}>
                Video:
              </Typography>
              <Typography
                variant="body1"
                onClick={() => window.open(selectedReceta.strYoutube, "_blank")}
                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
              >
                Ver en YouTube
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
