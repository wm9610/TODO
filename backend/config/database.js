const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected: ${process.env.MONGO_URI}`);
  } catch (error) {
    console.log(`Database failed to connect: ${process.env.MONGO_URI}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
