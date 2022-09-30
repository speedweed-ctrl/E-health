import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AllNews({props}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={`http://127.0.0.1:8000${props.image}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.subHeader}        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  );
}
