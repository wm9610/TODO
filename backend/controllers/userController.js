const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});

  if (user) {
    return res.status(400).send('User existed');
  }

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: encryptedPassword,
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

  const accessToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SEC,
    {expiresIn: '3d'}
  );

  if (user && (await bcrypt.compare(password, user.password))) {
    const {password, ...other} = user._doc;
    res.status(200).json({token: accessToken, ...other});
  } else {
    res.status(400).send('Invalid password');
  }
};

module.exports = {
  registerUser,
  loginUser,
};
