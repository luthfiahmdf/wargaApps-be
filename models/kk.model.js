const mongoose = require("mongoose");

const KartuKeluargaSchema = new mongoose.Schema({
  noKK: {
    type: String,
    required: true,
    unique: true,
  },
  kepalaKeluarga: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("KartuKeluarga", KartuKeluargaSchema);
