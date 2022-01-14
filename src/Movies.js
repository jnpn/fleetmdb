function Movies ({titles, search, pick, selected}) {
    let filtered = search ? titles.filter(t => t.name.includes(search)) : titles
    return (<ul className="ui movies">
        { filtered.map(({id,name,genre}) => 
            <li className="movie" onClick={()=> pick(id)} key={id}>
              <span className={"name" + ((selected === id) ? " selected" : "")}>
		{name}
	      </span> / <span className="genre">{genre}</span>
            </li>)}
    </ul>)
}

export default Movies;
