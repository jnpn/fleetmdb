import { capitalizeAll } from "./prelude";

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
          <CardMedia height="140" onClick={() => reset()}>
	   <img src="https://i.imgur.com/GyFDs98.png"
                height="120px"
                title={name + " @ IMDB"}
		alt={"movie poster for " + name}
	   ></img>
          </CardMedia>
          <CardContent>
	<Typography gutterBottom variant="h5" component="div">
	    {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
	    {movie.overview.slice(0,180) + "..."}
	</Typography>
	<Typography variant="caption" color="text.secondary">
	{movie.release_date}
        </Typography>
        </CardContent>
	<CardActions>
	<Button size="small">
	<Link
	    target="_blank"
	    rel="noreferrer"
	    href={"https://www.imdb.com/find?s=all&q=" + name}>
	  Open in IMDB
          </Link>
	</Button>
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
