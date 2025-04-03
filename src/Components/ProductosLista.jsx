import React, {useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import ProductosVerdura from './ProductosVerdura' 

const ProductosLista = () => {

    const [luz, setLuz]= useState(false)

    const cambioestado = ()=>{
        setLuz(!luz)

    }

    console.log('Luz esta en: ', luz)

  return (
    <div>
        <FormControlLabel
          label="Apagado"
          control={
            <Switch
              value={luz}
              checked={luz}
              onChange={cambioestado}
              
            />
          }
        />

        


        <Typography variant={luz ? "h1": "h3"} color={ luz ?  "success": "error"}>Luz</Typography>


        <Divider color="blue"/>

        <ProductosVerdura/>
    </div>



  )
}



export default ProductosLista