function nop(id) {
    alert(`<event> ${id}`);
}

function MovieMini(props) {
    return (<div className={"name mini" + (props.sel ? " selected" : "")}>
	    <span>{props.title}</span> (<span>{props.year}</span>)
	    <div className="tools">
	      <i className="empty icon" onClick={() => nop(props.id)}></i>
	      <i className="bookmark icon" onClick={() => nop(props.id)}></i>
	      <i className="tag icon" onClick={() => nop(props.id)}></i>
	    </div>
            </div>)
}

export default MovieMini;
