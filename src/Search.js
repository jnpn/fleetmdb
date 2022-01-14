function Search (props) {
    return (<div className="ui input search">
        <input
            placeholder="search..." 
            value={props.value}
            onChange={e => props.research(e.target.value)}></input>
    </div>)
}

export default Search;