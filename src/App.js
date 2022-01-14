import './App.css';
import { useState } from 'react';
import Search from './Search';
import Movies from './Movies';
import Viewer from './Viewer';

function App() {
  const [{search, titles, selected}, setState] = useState({
    search : "",
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
    },],
    selected: null
  })

  const pick = id => { console.log('picked', id); setState(prev => ({...prev, selected: id})) }
  const reset = () => { console.log(search); setState(prev => ({...prev, search: "", selected: null })) }
  const theMovie = id => {
    let q = titles.find(t => t.id === id);
    return q ? q : {name:null};
  }
  const research = term => { console.log(">",term); setState(prev => ({...prev, search: term})); }

  return (
    <div className="App">
      <header className="App-header">tmdb test app</header>
      <div className="main">
        <Search value={search} research={research}/>
        <Movies titles={titles} search={search} pick={(id) => pick(id)}/>
        <Viewer movie={theMovie(selected).name}/>
      </div>
      <div className="debug">
        <button onClick={reset}>reset</button>
        <pre> 
          search: {search};
          movie: {theMovie(selected).name};
          titles: {(titles.reduce((p, {name}) => p + "," + name, "?"))}; 
        </pre>
      </div>
      <footer>(c) Copyright fleet { new Date().getFullYear() }</footer>
    </div>
  );
}

export default App;
