function Search (props) {
    return (<div className="search">
        <input
            placeholder="search..." 
            value={props.value}
            onChange={e => props.research(e.target.value)}></input>
    </div>)
}

export default Search;