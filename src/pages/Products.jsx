import React , {useState,useEffect} from 'react'
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import {GoSettings} from 'react-icons/go'
import {ImCart } from 'react-icons/im'
import axios  from 'axios';
import ProductsCard from '../components/prodcts components/ProductsCard';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system';
import a from './Nano-Plus.jpeg'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const FilterButton=styled.button`
background-color:#E0EDFF;
width:100%;
font-size:3rem;
color:#216DFC;
text-align:center;
border-radius:1rem;
border-style:none;
padding-top:0.5rem;
margin-top:5px;

`
const InputSearch=styled.input`
  width:100%;
  height:60px;
  margin-top:8px;
  border-radius:1rem;
  border-style:none;
  background-color:#E0EDFF;
  font-size:20px;
  padding-left:20px;
  color:#216DFC;
  ::placeholder{
    color:#216DFC;
  }
`
const CartButton=styled.button`
background-color:white;
width:100%;
font-size:1.5rem;
height:60px;
color:#216DFC;
text-align:center;
border-radius:1rem;
padding-top:0.5rem;
margin-top:10px;
margin-left:60px;
border-color:#216DFC;
border-style:solid;
`
const ImageProd=styled.img`
border-radius:1rem;
width: 100%;
height: auto;

`




const Products = () => {

  const [products,SetProducts] =useState([])
  
  const getProducts=async()=>{
      const {data}=await axios.get('http://127.0.0.1:8000/api/pharma')
      SetProducts(data)

  }
  
  useEffect(()=>{
    getProducts()
    console.log(products)
  },[])
  

  return (
    <Grid container direction='column' style={{marginLeft:'1rem'}} >
        <Grid item> 
            <Grid container spacing={2}>
                <Grid item width='6%'> <FilterButton><GoSettings/></FilterButton> </Grid>
                <Grid item width='13%'>  
                <FormControl sx={{ m: 1, minWidth: 120,maxWidth:'fit-content',position:'relative',left:'25px'}}>
                    <InputLabel >categorie</InputLabel>
                        <Select 
                          label="Categorie"
                          sx={ { borderRadius:'1rem', color:'#216DFC'}}
                        >        
                            <MenuItem  >les Grosiste</MenuItem>
                            <MenuItem  >les pharmacie</MenuItem>
                        </Select>
                        <FormHelperText>select  categorie</FormHelperText>
                  </FormControl>

                  </Grid>
                <Grid item width='65%'><InputSearch placeholder='search for a product'/></Grid>
                <Grid item width='10%'><CartButton><ImCart/><span style={{position:'relative',bottom:'5px',left:'10px'}}>2 items</span></CartButton></Grid>
            </Grid>
        
        </Grid>
        <Grid item>
          <Grid container direction='column'>
              <Grid item>
                <Grid container spacing={4} lg={14} xl={14} md={14} sm={14} xs={14}>
                  {
                    products.map(prod=>{
                      return(
                        <Grid item>
                            <ProductsCard props={prod} />
                        </Grid>
                      )
                    })
                  }    
                </Grid>
              </Grid>
              <Grid item sx={{}}>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh">
              <Stack spacing={2}>
                  <Pagination
                    count={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                        sx={{backgroundColor:'#E0EDFF' , color:'#216DFC'}}
                      />
                    )}
                  />
                </Stack>
                </Box>
              </Grid>
          </Grid>
          
        </Grid>
        <Grid item>
        </Grid>
    </Grid>
  )
}

export default Products