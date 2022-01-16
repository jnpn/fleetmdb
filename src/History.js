import { uuid } from './uuid';

function History({history, pick, remidx, remid, clean}) {
  return (<div className="viewings">
	  <h1>history ({ history.length })<button onClick={clean}>clean</button></h1>
	  {
	    history.length ?
	      <ul>
	      {history.map((m,i) => (<li key={m.id+uuid()}><span>{m.title}</span>
				 <button onClick={() => pick(null, m)} >watch</button>
				 <button onClick={() => remidx(i)} >drop</button>
				 <button onClick={() => remid(m.id)} >drop*</button>
				 </li>))}
	      </ul> : <span></span>
  }</div>)
}

export default History;
