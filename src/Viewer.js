import { capitalizeAll } from "./prelude";

function Viewer({ movie, reset }) {
  let poster =
    "https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png";
  if (movie) {
    let name = capitalizeAll(movie.name);
    return (
      <div className="viewer">
        <div className="ui card">
          <div className="image">
            <img
              className="playing"
              title="click to reset"
              onClick={() => reset()}
              src={poster}
              alt={"movie poster for " + movie.name}
            ></img>
          </div>
          <div class="content">
            <div class="header">
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.imdb.com/find?s=all&q=" + movie.name}
              >
                {name}
              </a>
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">{movie.genre}</span>
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
            <img src={poster} alt="no movie"></img>
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
