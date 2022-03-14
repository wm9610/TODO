const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const connectToDB = require('./config/database');

connectToDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

app.use((err, req, res, next) => {
  res.status(500);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server started at port: ' + process.env.SERVER_PORT);
});
