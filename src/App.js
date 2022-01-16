import './App.css';
import { useState, useEffect } from 'react';

import Search from './Search';
import Movies from './Movies';
import Viewer from './Viewer';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Icon from '@mui/material/Icon';

function App() {

  const LIMIT = 8
  const DELAY = 400

  const [{search, titles, selected, viewings, loading, inview}, setState] = useState({
    loading: false,
    search : "",
    viewings : 0,
    titles : [],
    selected: null,
    inview: null,
  })

  const apiKey = "6901d4bcbda9bb060db018be423abb96"
  const defaultEndPoint = `//api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  const searchEndPoint =`//api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`

  useEffect(() => { 
      setTimeout(() => {
	  let endpoint = (search === "") ? defaultEndPoint : searchEndPoint;
	  setState(prev => ({...prev, loading:true}))
	  fetch(endpoint)
	      .then(r => r.json())
	      .then(ts => ts.results.slice(0,LIMIT))
	      .then(ts => setState(prev => ({ ...prev, titles: ts })))
	      .then(() => setTimeout(() => setState(prev => ({ ...prev, loading: false })), 200))
	      .catch(e => console.log('[error]', e)) }, DELAY);
  }, [defaultEndPoint, searchEndPoint, search]);

  const pick = id => setState(prev => ({...prev, selected: id, inview: theMovie(id), viewings: viewings + 1}))
  const reset = () => setState(prev => ({...prev, search: "", selected: null, inview: null, viewings: 0 }))
  const theMovie = id => titles.find(t => t.id === id)
  const research = term => setState(prev => ({...prev, search: term}))

  const logged = msg => f => () => { console.log(msg, f); let v = f(); console.log('logging done'); return v; }

  return (
    <>
      <AppBar position="static">
      <Toolbar >
          <Button color="inherit"><Icon>share</Icon></Button>
          <Search value={search} research={research}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            fleetmbd
          </Typography>
	  <ButtonGroup variant="contained" size="small">
            <Button ># ({viewings})</Button>
	    <Button onClick={logged('logging reset button')(reset)}>reset</Button>
	  </ButtonGroup>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container  className="App">
        <Box>
	  <main>
	    <Movies titles={titles}
		    loading={loading}
		    selected={selected}
		    search={search}
		    pick={(id) => pick(id)}/>
	    <Viewer reset={reset}
		    movie={inview}/>
	  </main>
	</Box>
      </Container>
    </>
  );
}

export default App;
