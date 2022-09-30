import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid'
import AllNews from '../components/News/AllNewsCard'
import axios from 'axios'




const News = () => {
    const [Data,setData]=useState([])
    const getData= async()=>{
        const {data} = await axios.get('http://127.0.0.1:8000/api/News')
        setData(data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <Grid container spacing={4} style={{paddingTop:'3rem',paddingLeft:'2rem'}} >
        
            {
                Data.map(data=>{
                    return(
                        <Grid item>
                        <AllNews props={data}/>
                        </Grid>
                    )
                })
            }
    </Grid>
  )
}

export default News