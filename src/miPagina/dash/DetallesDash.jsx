import React from "react";
import { useParams } from "react-router-dom";
 
export default function DetallesDash() {
    const params = useParams();
    let {city} = useParams();

    return(
        <div>
            Detalles Dash
            <br />
            <h1>Datos obtenidos GET: {params.city}</h1>
        </div>
    )
}