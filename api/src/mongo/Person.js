const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    photoUrl: { type: String, required: true },
    votesUp: { type: Number, default: 0 },
    votesDown: { type: Number, default: 0 },
    tags: [String],
    __v: { type: Number, select: false }
  },
  {
    timestamps: true,
    runSettersOnQuery: true
  }
);

module.exports = mongoose.model('Person', schema);
