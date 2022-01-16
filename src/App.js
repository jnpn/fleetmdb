import './App.css';
import { useState, useEffect } from 'react';
import Search from './Search';
import Movies from './Movies';
import Viewer from './Viewer';
import History from './History';

import { title } from './prelude';

function App() {

  const LIMIT = 10
  const DELAY = 400

  const initialState = {
    loading: false,
    search : "",
    history : [],
    titles : [],
    selected: null,
    inview: null,
  }
  const [{search, titles, selected, history, loading, inview}, setState] = useState(initialState)

  const apiKey = "6901d4bcbda9bb060db018be423abb96"
  const defaultEndPoint = `//api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  const searchEndPoint =`//api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`

  useEffect(() => title('fleetmdb'), [])

  const firstFetch = () => { 
      setTimeout(() => {
	  let endpoint = (search === "") ? defaultEndPoint : searchEndPoint;
	  setState(prev => ({...prev, loading:true}))
	  fetch(endpoint)
	      .then(r => r.json())
	      .then(ts => ts.results.slice(0,LIMIT))
	      .then(ts => setState(prev => ({ ...prev, titles: ts })))
	      .then(() => setTimeout(() => setState(prev => ({ ...prev, loading: false })), 200))
	      .catch(e => console.log('[error]', e)) }, DELAY);
  }

  useEffect(firstFetch, [defaultEndPoint, searchEndPoint, search]);

  const pick = (id,movie) => setState(prev => {
    let m = theMovie(id);
    if (m) {
      return ({...prev, selected: id, inview: m, history: history.concat(m) })
    }
    if (movie) {
      return ({...prev, selected: id, inview: movie, history:history.concat(movie) })
    }
  })
  const reset = () => { setState(initialState); firstFetch(); }
  const theMovie = id => titles.find(t => t.id === id)
  const research = term => setState(prev => ({...prev, search: term}))
  const rem = m => {
    let h = history.filter(e => e.id !== m.id)
    setState(p => ({...p, history: h}))
  }
  return (
    <div className="App ui container">
      <div className="main">
        <Search value={search} research={research}/>
        <Movies titles={titles} loading={loading} selected={selected} search={search} pick={(id) => pick(id)}/>
        <Viewer reset={reset} movie={inview}/>
      </div>
      <History
        history={history}
        rem={rem}
        pick={pick}>
      </History>
    </div>
  );
}

export default App;
