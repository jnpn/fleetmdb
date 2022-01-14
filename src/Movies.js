function Movies ({titles, search, pick, selected}) {
    let s = search
    let filtered = s ? titles.filter(t => t.name.toLowerCase().includes(s.toLowerCase())) : titles
    return (<ul className="ui movies">
        { filtered.map(({id,name,genre}) => 
            <li className="movie" onClick={()=> pick(id)} key={id}>
              <span className={"name" + ((selected === id) ? " selected" : "")}>
		{name}
	      </span>
            </li>)}
    </ul>)
}

export default Movies;
