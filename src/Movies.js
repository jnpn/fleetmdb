import { lowerCaseMatch } from './prelude';

function Movies({ titles, search, pick, selected }) {
    if (titles.length) {
	let filtered = search ? titles.filter(t => lowerCaseMatch(t.title, search)) : titles;
    return (
      <ul className="ui movies">
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
      <div class="ui movies">
        <p>loading...</p>
      </div>
    );
  }
}

export default Movies;
