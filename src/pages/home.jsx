import React ,{useEffect,useState} from 'react'
import  Grid  from '@mui/material/Grid'
import Opener from '../components/HomeComponents/opener'
import Typography from '@mui/material/Typography';
import DrugTable from '../components/HomeComponents/Table';
import Divider from '@mui/material/Divider';
import NewsCard from '../components/News/NewsCard'
import axios from 'axios';

const data=[11,1,1,1,1,1]
const Home = () => {
  /*const [data,setData]=useState([])

useEffect(()=>{
    const fetchData =async()=>{
        const {array} = await axios.get('http://127.0.0.1:8000/api/Repture')
        setData(array)  
        console.log(data)
    }
    fetchData()
    console.log(data)
} , [] )*/
  return (
    <Grid container direction='column' spacing={1} sx={{position:'relative',bottom:'10rem',zIndex:'-1'}}>
      <Grid item sx={{paddingBottom:''}} >
        <Opener/>
      </Grid>
      <Grid item sx={{position:'relative' , bottom:'17rem'}} >
        <Typography variant='h2' sx={{textAlign:'center',paddingBottom:'2rem',color:'#006DC2'}}>
          Les medicaments en rupture de stock
        </Typography>
          <DrugTable/>
      </Grid>
        <Grid item style={{position:'relative',bottom:'15rem'}}>
        <Typography variant='h2' sx={{textAlign:'center',paddingBottom:'2rem',color:'#006DC2',}} >
            Les dernières actualités 
        </Typography>

        <Grid container direction='row' spacing={14} style={{marginLeft:'1rem'}}>

          {
            data.map(card=>{
              return ( 
                <Grid item>
                    <NewsCard/>
                </Grid>
              )
            })
          }
            
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Home