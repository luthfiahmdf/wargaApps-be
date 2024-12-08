const mongoose = require("mongoose");

const KartuKeluargaSchema = new mongoose.Schema({
  noKK: {
    type: Number,
    required: true,
    unique: true,
  },
  kepalaKeluarga: {
    type: String,
    required: true,
  },
  rt: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("KartuKeluarga", KartuKeluargaSchema);
