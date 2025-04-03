import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
 
export default function PageDash() {
    return(
        <div>
            <h6>Dashboard</h6>
            <br />
            <Link to='/dash/mexico'>Mexico</Link>
            <br />
            <Link to='/dash/usa'>USA</Link>
            <br />
            <Link to='/dash/34'>ID 34</Link>
            <br />
            <Button LinkComponent={Link} to="/dash/holamundo" type="button" color="primary">Ver más</Button>
            
        </div>
    )
}