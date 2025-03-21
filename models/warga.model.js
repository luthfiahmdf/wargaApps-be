const mongoose = require("mongoose");

const DataWargaSchema = new mongoose.Schema({
  namaLengkap: {
    type: String,
    required: true,
  },
  nik: {
    type: Number,
    required: true,
    unique: true,
  },
  rt: {
    type: String,
    enum: ["01", "02"],
    required: true,
  },
  tanggalLahir: {
    type: Date,
    required: true,
  },
  jenisKelamin: {
    type: String,
    enum: ["Laki-laki", "Perempuan"],
    required: true,
  },
  agama: {
    type: String,
    required: true,
  },
  pekerjaan: {
    type: String,
    required: true,
  },
  statusKawin: {
    type: String,
    enum: ["Belum Kawin", "Kawin", "Cerai"],
    required: true,
  },
  noKK: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("DataWarga", DataWargaSchema);
