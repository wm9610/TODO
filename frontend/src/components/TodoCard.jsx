import {format} from 'date-fns';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';

function TodoCard(props) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          # Item {props.index + 1}
        </Typography>
        <Typography variant="h6" component="h2">
          {props.context}
        </Typography>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          {format(new Date(props.createdAt), 'do MMMM Y')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
        <Switch id="isCompleted" />
        <InputLabel htmlFor="isCompleted" sx={{fontSize: 14}}>
          COMPLETED
        </InputLabel>
      </CardActions>
    </Card>
  );
}

export default TodoCard;
