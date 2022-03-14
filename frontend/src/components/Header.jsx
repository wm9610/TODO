import {useSelector} from 'react-redux';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';

function Header() {
  const userState = useSelector((state) => state.user);
  console.log(userState);
  const {user} = userState;
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          {' '}
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{mr: 5}}>TODO App</Typography>
            {user ? (
              <>
                <Paper
                  component="form"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '600px',
                  }}
                >
                  <InputBase sx={{ml: 1, flex: 1}} placeholder="Search" />
                  <IconButton>
                    <SearchIcon type="submit" />
                  </IconButton>
                </Paper>
                <List sx={{display: 'flex'}}>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </>
            ) : (
              <>
                <List sx={{display: 'flex'}}>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="Login" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/register">
                      <ListItemText primary="Register" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
