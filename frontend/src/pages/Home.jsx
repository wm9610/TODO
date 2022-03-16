import {format} from 'date-fns';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Masonry from '@mui/lab/Masonry';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TodoCard from '../components/TodoCard';
import CreateTodo from '../components/CreateTodo';

import {fetchTodoRequest} from '../actions/todoAction';

function Home() {
  const {user} = useSelector((state) => state.user);
  const {loading, todos, error} = useSelector((state) => state.todo);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(fetchTodoRequest());
  }, [navigate, dispatch, user]);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="lg">
      <br />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Typography variant="h5" component="h1">
          Today is {format(new Date(), 'do MMMM Y')}
        </Typography>
        <Fab size="small" color="secondary" onClick={handleToggle}>
          <AddIcon />
        </Fab>
      </Box>

      <br />
      <Masonry columns={{sm: 1, md: 2, lg: 3}} spacing={3}>
        {todos.map((todo, index) => (
          <TodoCard {...todo} index={index} key={todo._id} />
        ))}
      </Masonry>
      {open && <CreateTodo handleClose={handleClose} open={open} />}
    </Container>
  );
}

export default Home;
