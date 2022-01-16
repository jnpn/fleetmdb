import { lowerCaseMatch } from './prelude';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Movies({ titles, search, pick, selected, loading }) {
    if (titles.length) {
      let filtered = search ? titles.filter(t => lowerCaseMatch(t.title, search)) : titles;
    return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
	<List dense className={loading ? "loading" : ""}>
        {filtered.map(({ id, title, release_date }) => (
          <ListItem className="movie" onClick={() => pick(id)} key={id}>
            <ListItemButton className={"name" + (selected === id ? " selected" : "")}>
            <ListItemText>{title} <span>({release_date ? release_date.split('-')[0] : '?'})</span></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
	</Box>
    );
  } else {
    return (
      <div className="ui movies">
        <p>Loading from TMDB...</p>
      </div>
    );
  }
}

export default Movies;
