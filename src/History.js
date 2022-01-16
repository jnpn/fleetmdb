import { uuid } from './uuid';

function History({history, pick, rem}) {
  return (<div className="viewings">
	  <h1>history ({ history.length })</h1>
	  {
	    history.length ?
	      <ul>
	      {history.map(m => (<li key={m.id+uuid()}><span>{m.title}</span>
				 <button onClick={() => pick(null, m)} >watch</button>
				 <button onClick={() => rem(m)} >drop</button>
				 </li>))}
	      </ul> : <span></span>
  }</div>)
}

export default History;
