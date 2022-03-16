import {format} from 'date-fns';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Masonry from '@mui/lab/Masonry';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TodoCard from '../components/TodoCard';
import CreateTodo from '../components/CreateTodo';

const todos = [
  {
    _id: '622a1c1254c893dc29ef0134',
    user: '622a0d7cf92a8c64d08d57fc',
    context: 'Buy coffee',
    isCompleted: true,
    createdAt: '2022-03-10T15:41:06.770Z',
    updatedAt: '2022-03-10T15:48:45.735Z',
    __v: 0,
  },
  {
    _id: '622a1c1b54c893dc29ef0136',
    user: '622a0d7cf92a8c64d08d57fc',
    context:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime',
    isCompleted: false,
    createdAt: '2022-03-10T15:41:15.587Z',
    updatedAt: '2022-03-10T15:41:15.587Z',
    __v: 0,
  },
  {
    _id: '622a1c1b54c893dc29ef0136',
    user: '622a0d7cf92a8c64d08d57fc',
    context: 'Repair tele',
    isCompleted: false,
    createdAt: '2022-03-10T15:41:15.587Z',
    updatedAt: '2022-03-10T15:41:15.587Z',
    __v: 0,
  },
  {
    _id: '622a1c1b54c893dc29ef0136',
    user: '622a0d7cf92a8c64d08d57fc',
    context: 'Repair tele',
    isCompleted: false,
    createdAt: '2022-03-10T15:41:15.587Z',
    updatedAt: '2022-03-10T15:41:15.587Z',
    __v: 0,
  },
  {
    _id: '622a1c1b54c893dc29ef0136',
    user: '622a0d7cf92a8c64d08d57fc',
    context: 'Repair tele',
    isCompleted: false,
    createdAt: '2022-03-10T15:41:15.587Z',
    updatedAt: '2022-03-10T15:41:15.587Z',
    __v: 0,
  },
  {
    _id: '622a1c1b54c893dc29ef0136',
    user: '622a0d7cf92a8c64d08d57fc',
    context: 'Repair tele',
    isCompleted: false,
    createdAt: '2022-03-10T15:41:15.587Z',
    updatedAt: '2022-03-10T15:41:15.587Z',
    __v: 0,
  },
  {
    _id: '622a1c1b54c893dc29ef0136',
    user: '622a0d7cf92a8c64d08d57fc',
    context:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime',
    isCompleted: false,
    createdAt: '2022-03-10T15:41:15.587Z',
    updatedAt: '2022-03-10T15:41:15.587Z',
    __v: 0,
  },
];

function Home() {
  const {user} = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

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
          <TodoCard {...todo} index={index} key={index} />
        ))}
      </Masonry>
      {open && <CreateTodo handleClose={handleClose} open={open} />}
    </Container>
  );
}

export default Home;
