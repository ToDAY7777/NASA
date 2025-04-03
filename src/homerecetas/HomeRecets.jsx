import React, { useState } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContenidoRecetas from "./ContenidoRecetas";

export default function HomeRecets() {
    const [textobuscar, setTextoBuscar] = useState('');
    const [data, setData] = useState({ meals: [] });

    const buscarcomida = async () => {
        if (textobuscar.trim() === "") {
            alert('Escribe algo por ejemplo "chickenpollo"');
            return;
        }

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textobuscar.trim()}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };


 React.useEffect(() => {
          const obtenerdatapre = async ()=>{
            const requestOptions = {
                method: "GET",
                redirect: "follow"
    
                };
                try {
                    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`, requestOptions);
                    const result = await response.json();
                    console.log(result)
                    setData(result);
                } catch (error) {
                    console.error(error);
                }
          }
          obtenerdatapre()
        }, [])


    return (
        <div>
            <Grid container padding={4} spacing={2}>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        label="Buscar tu comida y su preparacion "
                        variant="outlined"
                        onChange={(e) => setTextoBuscar(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={buscarcomida} color="primary" size="large">
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <ContenidoRecetas data={data.meals} />

       



        </div>
    );
}