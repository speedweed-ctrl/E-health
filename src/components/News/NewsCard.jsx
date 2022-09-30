import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ph from './ph.png'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="news article"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={ph}
        alt="image goes here"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Header 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>:</Typography>
          <Typography paragraph>
           Est quis enim enim cupidatat commodo laborum dolor commodo ipsum.
          </Typography>
          <Typography paragraph>
            Commodo non minim culpa dolore minim ut mollit deserunt fugiat nulla voluptate aute labore. Exercitation sit nulla ullamco sint minim consectetur ad eiusmod elit cupidatat eu duis reprehenderit dolore. Et sint occaecat minim dolor ullamco aliquip nulla nisi qui ipsum amet dolor veniam non. Eu consectetur ad excepteur ullamco dolore mollit sunt amet.

Id cupidatat aliqua nulla eu commodo laborum occaecat eiusmod incididunt tempor aliquip mollit aliquip. Tempor veniam cupidatat reprehenderit deserunt labore consectetur do aliquip est irure amet proident. Sunt cupidatat in nulla et non tempor quis cupidatat sit voluptate. Exercitation aute labore magna velit elit culpa officia.
          </Typography>
          <Typography paragraph>
            Eiusmod ipsum elit non cillum elit ullamco aute mollit.Eiusmod ipsum elit non cillum elit ullamco aute mollit.
            Eiusmod ipsum elit non cillum elit ullamco aute mollit.Eiusmod ipsum elit non cillum elit ullamco aute mollit.
            Eiusmod ipsum elit non cillum elit ullamco aute mollit.Eiusmod ipsum elit non cillum elit ullamco aute mollit.
            Eiusmod ipsum elit non cillum elit ullamco aute mollit.Eiusmod ipsum elit non cillum elit ullamco aute mollit.
          </Typography>
          <Typography>
          Eiusmod ipsum elit non cillum elit ullamco aute mollit.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
