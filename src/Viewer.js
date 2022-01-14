function Viewer ({movie, reset}) {
    //let name = movie ? movie.name : "nothing"
    if (movie) {
        return (<div className="viewer">
        <div className="ui card">
        <h3>watching {movie.name}</h3>
                <img className="playing"
             title="click to reset"
             onClick={() => reset()}
             src="https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png"
             alt={"movie poster for " + movie.name}></img>
        </div>
    </div>)
    } else {
        return (<div className="viewer">
            <div className="ui card">
        <img src="https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png"
        alt="no movie"></img>
        <h3>Nothing</h3>
    </div></div>)
    }
}

export default Viewer;