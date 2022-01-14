import { lowerCaseMatch } from './prelude';

function loader(loading) {
    if (loading) {
	// return (<div class="ui active dimmer">
	// 	  <div class="ui indeterminate text loader">Loading...</div>
	// 	</div>);
	return (<div class="ui active mini centered inline loader"></div>)
    } else {
	return (<p></p>);
    }
}

function Movies({ titles, search, pick, selected, loading }) {
    if (titles.length) {
	let filtered = search ? titles.filter(t => lowerCaseMatch(t.title, search)) : titles;
    return (
      <ul className="ui movies">
        { loader(loading) }
        {filtered.map(({ id, title }) => (
          <li className="movie" onClick={() => pick(id)} key={id}>
            <span className={"name" + (selected === id ? " selected" : "")}>
              {title}
            </span>
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
