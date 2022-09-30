import React , {useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import axios from 'axios'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const style={
    backgroundImage:'#616161',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    padding:'0px',
    margin:'0px !important'
  }
const Login = () => {
  
    const [Data,setData]=useState([])
    const [user,SetUser]=useState('')
    const [code , setCode]=useState('')

    const LoginHandler =async(e)=>{
        e.preventDefault()
       const {data} = await axios.post(`http://127.0.0.1:8000/api/login`,{
        username:user,
        password:code,
       })
       setData(data)
       window.localStorage.setItem('token',data.token)
       console.log(data)
       const tokken=window.localStorage.getItem('token')

       tokken? window.location.replace('/'):console.log('no')
    }
    
  return (
    <Box style={style} display='flex'  justifyContent="center" alignItems="center" minHeight="102vh"    >
            <Grid container spacing={0} direction='row-reverse' alignItems="center" justifyContent="center" style={{ borderStyle:'solid',borderColor:'#3CCF4E',width:'25%',height:'25rem' , paddingLeft:'2rem' ,borderRadius:'1rem',boxShadow:'10px 10px 10px ' ,}}> 
            <Grid item sx={{}}>
            <Grid container direction='column' spacing={3} >
                <Grid item>
                
                </Grid>
                <Grid item>
                
                 <FormControl sx={{width:'80%', backgroundColor:'white',paddingLeft:'1.5rem',paddingBottom:'1rem'}}>
                    <TextField helperText="Please enter your username"  label="username" onChange={(e)=>{SetUser(e.target.value)}} />
                 </FormControl>
                 <FormControl sx={{width:'80%', backgroundColor:'white',paddingLeft:'1.5rem'}}>
                    <TextField helperText="optional"  label="Password" type='password' onChange={(e)=>{setCode(e.target.value)}} />
                 </FormControl>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                  <Link to='/'>
                <Button variant="contained" color="success" sx={{position:'relative',left:'18.5rem' , bottom:'3rem'}} onClick={(e)=>{LoginHandler(e)}}>Login</Button>
                </Link>
                </Grid>
            </Grid>
            </Grid>
            </Grid>
    </Box>
  )
  
}

export default Login