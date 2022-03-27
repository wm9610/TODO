const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const connectToDB = require('./config/database');

connectToDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

//serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set environment mode'));
}

app.use((err, req, res, next) => {
  res.status(500);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started at port: ' + process.env.SERVER_PORT);
});
