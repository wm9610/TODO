const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    context: String,
    isCompleted: Boolean,
  },
  {timestamps: true}
);

module.exports = mongoose.model('Todo', todoSchema);
