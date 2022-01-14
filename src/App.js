import './App.css';
import { useState } from 'react';
import Search from './Search';
import Movies from './Movies';
import Viewer from './Viewer';

function App() {
  const [{search, titles, selected, viewings}, setState] = useState({
    search : "",
    history : [],
    viewings : 0,
    titles : [{
      id: '001',
      name: "robocop",
      genre: "sf"
    },{
      id: '002',
      name: "the terminator",
      genre: "sf"
    },{
      id: '003',
      name: "alien",
      genre: "sf"
    },{
      id: '004',
      name: "the abyss",
      genre: "sf"
    },{
      id: '005',
      name: "star wars",
      genre: "sf"
    },{
      id: '006',
      name: "rambo",
      genre: "act"
    },{
      id: '007',
      name: "ronin",
      genre: "cop"
    },{
      id: '008',
      name: "fargo",
      genre: "com"
    },],
    selected: null
  })

  const pick = id => { console.log('picked', id); setState(prev => ({...prev, selected: id, viewings: viewings + 1})) }
  const reset = () => { console.log(search); setState(prev => ({...prev, search: "", selected: null })) }
  const theMovie = id => titles.find(t => t.id === id)
  const research = term => setState(prev => ({...prev, search: term}))

  return (
    <div className="App ui container">
      <div className="main">
        <Search value={search} research={research}/>
        <Movies titles={titles} search={search} pick={(id) => pick(id)}/>
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
