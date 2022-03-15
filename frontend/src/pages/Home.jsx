import {format} from 'date-fns';
import {Masonry} from '@mui/lab';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TodoCard from '../components/TodoCard';

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
  return (
    <Container maxWidth="lg">
      <br />
      <Typography variant="h5" component="h1">
        Today is {format(new Date(), 'do MMMM Y')}
      </Typography>
      <br />
      <Masonry columns={{sm: 1, md: 2, lg: 3}} spacing={3}>
        {todos.map((todo, index) => (
          <TodoCard {...todo} index={index} key={index} />
        ))}
      </Masonry>
    </Container>
  );
}

export default Home;
