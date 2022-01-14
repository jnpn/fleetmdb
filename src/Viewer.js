import { capitalizeAll } from "./prelude";
import { useState, useEffect } from 'react';

function Viewer({ movie, reset }) {

    let poster = "https://ephygie.com/wp-content/uploads/2016/05/Point-dinterrogation-10.png";

    const [posters,setPosters] = useState([]);

    useEffect(() => {
	if (movie) {
	const apiKey = "6901d4bcbda9bb060db018be423abb96"
	let endpoint = `//api.themoviedb.org/3/movie/${movie.id}/images?api_key=${apiKey}`
	let base = "https://image.tmdb.org/t/p/original/"
	fetch(endpoint)
	    .then(r => r.json())
	    .then(j => j.posters.map(p => base + p.file_path))
		.then(imgs => { console.log(posters, imgs); return imgs; })
		.then(imgs => setPosters(() => (imgs)))
	    .catch(console.log)
	}
    }
    ,[movie])

  if (movie) {
      let name = capitalizeAll(movie.title);
    return (
      <div className="viewer">
        <div className="ui card">
            <div className="image"
   	         onClick={() => reset()}>
	    <img src="https://i.imgur.com/GyFDs98.png"
              className="film icon playing"
              title="click to reset"
              alt={"movie poster for " + name}
            ></img>
          </div>
          <div className="content">
            <div className="header">
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.imdb.com/find?s=all&q=" + name}
              >
                {name}
              </a>
            </div>
	    <div className="description">
	    {movie.overview.slice(0,180) + "..."}
	    <ul className="posters">
	    { posters.slice(0,10).map(p => { return (<li key={p}><img src={p}></img></li>)}) }
	    </ul>
	    </div>
          </div>
          <div className="extra content">
            <span className="right floated">{movie.release_date}</span>
            <span></span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="viewer">
        <div className="ui card">
          <div className="image">
            <img src={poster}
                 alt="no movie"></img>
          </div>
          <div className="content">
            <h3>Nothing</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewer;
