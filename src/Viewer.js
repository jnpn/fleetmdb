import { capitalizeAll } from "./prelude";

import Hider from './Hider';

function Viewer({ movie, reset }) {
  let poster =
    "https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png";
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
	    </div>
          </div>
	<Hider main={          <div className="extra content">
            <span className="right floated">{movie.release_date}</span>
            <span></span>
          </div>
		    }><p>foo</p></Hider>
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
