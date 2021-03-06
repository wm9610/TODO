import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';

import {logoutUserRequest} from '../actions/userAction';
import {fetchTodoSuccess, searchTodoRequest} from '../actions/todoAction';

function Header() {
  const {user} = useSelector((state) => state.user);
  const [searchItem, setSearchItem] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUserRequest());
    setSearchItem('');
    dispatch(fetchTodoSuccess([]));
    navigate('/login');
  };

  useEffect(() => {
    dispatch(searchTodoRequest(searchItem));
  }, [searchItem, dispatch]);

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
                    py: '3px',
                  }}
                >
                  <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                  />
                </Paper>
                <List sx={{display: 'flex'}}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      to="/login"
                      onClick={handleLogout}
                    >
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
