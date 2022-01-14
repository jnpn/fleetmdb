function Viewer ({movie}) {
    let name = movie ? movie : "nothing"
    return (<div className="viewer">
        <h3>watching {name}</h3>
        <img src="https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png"
             alt={"movie poster for " + name}></img>
    </div>)
}

export default Viewer;