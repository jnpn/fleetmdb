import { capitalizeAll } from "./prelude";

import Icon from '@mui/material/Icon';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Viewer({ movie, reset }) {
  let poster =
      "https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png";
  if (movie) {
    let name = capitalizeAll(movie.title);
    return (
      <Box className="viewer">
        <Card sx={{maxWidth: 345}}>
        <CardMedia
      component="img"
      height="160"
      onClick={() => reset()}
      image="http://theclownsllc.com/wp-content/uploads/2015/03/video-placeholder.jpg"
      title={name + " @ IMDB"}
      alt={"movie poster for " + name}
	>
          </CardMedia>
          <CardContent>
	<Typography gutterBottom variant="h5" component="div">
	  {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
	    {movie.overview.slice(0,180) + "..."}
	</Typography>
	<Typography variant="caption" color="text.secondary">
	{movie.release_date.length}
        </Typography>
        </CardContent>
	<CardActions>
	<Button size="small">
	<Link
	    target="_blank"
	    rel="noreferrer"
	    href={"https://www.imdb.com/find?s=all&q=" + name}>
	Open IMDB
          </Link>
	</Button>
	<Button disabled size="small">Share</Button>
	<Button disabled size="small"> _ </Button>
	<Typography variant="caption"><Icon>today</Icon>{movie.release_date}</Typography>
	</CardActions>
        </Card>
      </Box>
    );
  } else {
    return (
      <div className="viewer">
        <Card sx={{maxWidth: 345}}>
          <CardMedia height="140" onClick={() => reset()}>
           <img src={poster} alt="no selected movie"></img>
          </CardMedia>
          <CardContent>
  	    <Typography gutterBottom variant="h5" component="div">
	      Nothing
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Viewer;
