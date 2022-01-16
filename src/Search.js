import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Search (props) {
  return (<Box
	    component="form"
	    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
	    noValidate
	    autoComplete="off">
	    <TextField
	    id="search"
	    label="title"
	    value={props.value}
	    onChange={e => props.research(e.target.value)}
	  />
	  </Box>)
}

export default Search;
