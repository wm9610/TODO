import {format} from 'date-fns';
import {useDispatch} from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import {completeTodoRequest, deleteTodoRequest} from '../actions/todoAction';

function TodoCard(props) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodoRequest(props._id));
  };

  const handleDelete = () => {
    dispatch(deleteTodoRequest(props._id));
  };

  return (
    <Card elevation={3} sx={{backgroundColor: 'error'}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          # Item {props.index + 1}
        </Typography>
        <Typography variant="h6" component="h2">
          {props.context}
        </Typography>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          {format(new Date(props.updatedAt), 'do MMMM Y')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
        <FormControlLabel
          control={<Switch disabled={false} checked={props.isCompleted} />}
          label={props.isCompleted ? 'COMPLETED' : 'PENDING'}
          sx={{ml: '0.15rem'}}
          disabled={props.isCompleted}
          onChange={handleComplete}
        />
      </CardActions>
    </Card>
  );
}

export default TodoCard;
