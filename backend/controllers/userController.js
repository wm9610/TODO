const User = require('../models/userSchema');

const registerUser = async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});

  // console.log(user);

  if (user) {
    return res.status(400).send('User existed');
  }

  const newUser = new User({
    username,
    password,
  });

  await newUser.save();

  res.status(200).json(req.body);
};

const loginUser = async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});

  if (!user) {
    return res.status(400).send('Invalid user');
  }

  if (password === user.password) {
    res.status(200).json(user);
  } else {
    res.status(400).send('Invalid password');
  }
};

module.exports = {
  registerUser,
  loginUser,
};
