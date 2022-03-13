import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Paper} from '@mui/material';

function Login() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Paper elevation={3} sx={{width: '30rem', px: '1.5rem', py: '2.5rem'}}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login to your account
        </Typography>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField label="Username" type="string" focused margin="normal" />
          <TextField label="Password" type="password" focused margin="normal" />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{my: '1rem'}}
            size="large"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
