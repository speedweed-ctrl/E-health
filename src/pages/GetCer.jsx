import React , {useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import axios from 'axios'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const style={
    backgroundImage:'#E0EDFF',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    padding:'0px',
    margin:'0px !important'
  }
  

  
  
   
const GetCer = () => {
    const [Data,setData]=useState([])
    const [code , setCode]=useState(0)

    const GetCertif =async(e)=>{
        e.preventDefault()
       const {data} = await axios.get(`http://127.0.0.1:8000/api/certif/${code}`)
       setData(data)
       console.log(data)
    }
    
  return (
    <Box style={style} display='flex'  justifyContent="center" alignItems="center" minHeight="102vh"    >
            <Grid container spacing={0} direction='row-reverse' alignItems="center" justifyContent="center" style={{ borderStyle:'solid',borderColor:'#216DFC',width:'50%',height:'22rem' , paddingLeft:'2rem' ,borderRadius:'1rem',boxShadow:'10px 10px 1px ' ,}}>
                <Grid item sx={{width:'25%'}}>
                    <img src={Data.Certif} style={{width:'120%',height:'17rem',position:'relative',right:'5rem',top:'0rem'}} alt='aa'></img>
                </Grid>
            <Grid item sx={{width:'75%'}}>
            <Grid container direction='column' spacing={3} >
                <Grid item>
                
                </Grid>
                <Grid item>
                <FormControl sx={{width:'70%', backgroundColor:'white'}}>
                    <TextField helperText="Please enter your unique code" id="demo-helper-text-misaligned" label="code" onChange={(e)=>{setCode(e.target.value)}} />
                 </FormControl>
                </Grid>
                <Grid item>
                
                </Grid>
                <Grid item>
                <Button variant="contained" sx={{position:'relative',left:'23.5rem'}} onClick={(e)=>{GetCertif(e)}}>confirm</Button>

                </Grid>
            </Grid>
            </Grid>
            </Grid>
    </Box>
  )
}

export default GetCer