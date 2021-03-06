import {useState} from 'react';
import {useDispatch} from 'react-redux';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Backdrop, Paper} from '@mui/material';
import {createTodoRequest} from '../actions/todoAction';

function CreateTodo(props) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    context: '',
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    props.handleClose();
    dispatch(createTodoRequest(formData));
  };

  const handleChangeEvent = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Backdrop
      sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
      open={props.open}
      onClick={props.handleClose}
    >
      <Paper
        elevation={3}
        sx={{width: '30rem', px: '1.5rem', py: '2.5rem'}}
        onClick={(e) => e.stopPropagation()}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Create new TODO item
        </Typography>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmitEvent}
        >
          <TextField
            type="string"
            multiline
            rows="5"
            required
            autoFocus
            margin="normal"
            name="context"
            value={formData.context}
            onChange={handleChangeEvent}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{my: '1rem'}}
            size="large"
          >
            Add to list
          </Button>
        </form>
      </Paper>
    </Backdrop>
  );
}

export default CreateTodo;
