import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Paper} from '@mui/material';
import TransitionAlert from '../components/TransitionAlert';

import {registerUserRequest, registerUserError} from '../actions/userAction';

function Register() {
  const userState = useSelector((state) => state.user);
  const {registerSuccess, error} = userState;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });

  useEffect(() => {
    if (registerSuccess) {
      navigate('/login');
    }
  }, [registerSuccess, navigate]);

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    const {password, repeatPassword} = formData;

    if (password === repeatPassword) {
      dispatch(registerUserRequest(formData));
    } else {
      dispatch(registerUserError('Password do not match'));
    }
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
          Create your account
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
          <TextField
            label="Repeat Password"
            type="password"
            focused
            margin="normal"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChangeEvent}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{my: '1rem'}}
            size="large"
          >
            Register
          </Button>
        </form>
        {error && <TransitionAlert error={error} />}
      </Paper>
    </Container>
  );
}

export default Register;
