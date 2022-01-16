import { uuid } from './uuid';

function History({history, pick}) {
  return (<div className="viewings"><h1>history</h1>{
	history.length ? <ul>
      {history.map(m => (<li onClick={() => pick(null, m)} key={m.id+uuid()}>{m.title}</li>))}
	</ul> : <span></span>
  }</div>)
}

export default History;
