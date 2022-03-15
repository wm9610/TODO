import {format} from 'date-fns';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

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
        <FormControlLabel
          control={<Switch />}
          label="COMPLETED"
          sx={{ml: '0.15rem'}}
        />
      </CardActions>
    </Card>
  );
}

export default TodoCard;
