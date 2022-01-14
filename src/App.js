import './App.css';
import { useState, useEffect } from 'react';
import Search from './Search';
import Movies from './Movies';
import Viewer from './Viewer';

function App() {

  const apiKey = "6901d4bcbda9bb060db018be423abb96"
  const endpoint = "https://api.themoviedb.org/3/movie/popular/?api_key=" + apiKey

  const [{search, titles, selected, viewings}, setState] = useState({
    search : "",
    viewings : 0,
    titles : [],
    selected: null
  })

  useEffect(() => {
      setTimeout(() => fetch(endpoint)
		 .then(r => r.json())
		 .then(ts => ts.results.slice(0,15))
		 .then(ts => setState(prev => ({ ...prev, titles: ts }))), 400);
  }, [endpoint]);


  const pick = id => setState(prev => ({...prev, selected: id, viewings: viewings + 1}))
  const reset = () => setState(prev => ({...prev, search: "", selected: null }))
  const theMovie = id => titles.find(t => t.id === id)
  const research = term => setState(prev => ({...prev, search: term}))

  return (
    <div className="App ui container">
      <div className="main">
        <Search value={search} research={research}/>
        <Movies titles={titles} selected={selected} search={search} pick={(id) => pick(id)}/>
        <Viewer reset={reset} movie={theMovie(selected)}/>
      </div>
      <div className="viewings">{viewings}</div>
      <div className="debug">
        <pre> 
          search: {search};
          viewings: {viewings};
          movie: {theMovie(selected) ? theMovie(selected).name : "???"};
        </pre>
      </div>
    </div>
  );
}

export default App;
