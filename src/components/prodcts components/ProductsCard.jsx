import React from 'react'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ProductsCard = ({props}) => {
  return (
    <Card sx={{ minHeight: '280px', minWidth: 320 }}>
    <CardCover>
      <img
        src={`http://127.0.0.1:8000${props.image}`}
        alt=""
      />
    </CardCover>
    <CardCover
      sx={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
      }}
    />
    <CardContent sx={{ justifyContent: 'flex-end' }}>
      <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
        {props.name}
      </Typography>
      <Typography
        startDecorator={<ShoppingCartIcon/>}
        textColor="neutral.300"
      >
        {props.prix}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default ProductsCard