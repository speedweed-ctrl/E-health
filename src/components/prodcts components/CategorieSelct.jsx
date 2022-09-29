import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/material';

/*const useStyles=makeStyles(()=>({
    select: {
        "&:before": {
          borderColor: '#216DFC'
        },
        "&:after": {
          borderColor: '#216DFC'
        }
      },
      icon: {
        fill: '#216DFC'
      }
}))*/

const CategorieSelct = ({props}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120,maxWidth:'fit-content',position:'relative',left:'25px'}}>
        <InputLabel >categorie</InputLabel>
        <Select 
          label="Categorie"
          sx={ { borderRadius:'1rem', color:'#216DFC'}}
          
        >
          {
            props.map((data)=>{
                return(
                    <MenuItem value={data.id}>{data.Categorie}</MenuItem>
                )
            })
          }
        </Select>
        <FormHelperText>select product categorie</FormHelperText>
      </FormControl>
  )
}

export default CategorieSelct