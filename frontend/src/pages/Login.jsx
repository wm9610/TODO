import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Paper} from '@mui/material';
import TransitionAlert from '../components/TransitionAlert';

import {loginUserRequest} from '../actions/userAction';

function Login() {
  const userState = useSelector((state) => state.user);
  const {loginSuccess, error} = userState;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (loginSuccess) {
      navigate('/');
    }
  }, [loginSuccess, navigate]);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    dispatch(loginUserRequest(formData));
  };

  const handleChangeEvent = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
          onSubmit={handleSubmitEvent}
        >
          <TextField
            label="Username"
            type="string"
            focused
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleChangeEvent}
          />
          <TextField
            label="Password"
            type="password"
            focused
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChangeEvent}
          />

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
        {error && <TransitionAlert error={error} />}
      </Paper>
    </Container>
  );
}

export default Login;
