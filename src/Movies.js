function Movies ({titles, search, pick}) {
    let filtered = search ? titles.filter(t => t.name.includes(search)) : titles
    return (<ul className="ui movies">
        { filtered.map(({id,name,genre}) => 
            <li className="movie" onClick={()=> pick(id)} key={id}>
                <span className="name">{name}</span> / <span className="genre">{genre}</span>
            </li>)}
    </ul>)
}

export default Movies;