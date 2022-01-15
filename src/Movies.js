import MovieMini from './MovieMini';
import { lowerCaseMatch } from './prelude';

function loader(loading) {
    if (loading) {
	return (<div class="ui active mini centered inline loader"></div>)
    } else {
	return (<p></p>);
    }
}

function Movies({ titles, search, pick, selected, loading }) {
    if (titles.length) {
	let filtered = search ? titles.filter(t => lowerCaseMatch(t.title, search)) : titles;
    return (
	<ul className={`ui movies ${ loading ? "loading" : "" }`}>
        { loader(loading) }
        {filtered.map(({ id, title }) => (
          <li className="movie" onClick={() => pick(id)} key={id}>
	    <MovieMini sel={selected===id}
	    className={"name" + (selected === id ? " selected" : "")}
              id={id}
	      title={title}
	      genre="sf"
	      year="2020">
	    </MovieMini>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <div className="ui movies">
        <p>Loading from TMDB...</p>
      </div>
    );
  }
}

export default Movies;
