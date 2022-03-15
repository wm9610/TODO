import {format} from 'date-fns';
import {Container, Typography} from '@mui/material';

function Home() {
  return (
    <Container maxWidth="lg">
      <Typography>Today is {format(new Date(), 'do MMMM Y')}</Typography>
    </Container>
  );
}

export default Home;
