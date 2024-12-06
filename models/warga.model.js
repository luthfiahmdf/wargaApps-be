const mongoose = require("mongoose");

const DataWargaSchema = new mongoose.Schema({
  namaLengkap: {
    type: String,
    required: true,
  },
  nik: {
    type: String,
    required: true,
    unique: true,
  },
  alamat: {
    type: String,
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
  noHP: {
    type: String,
    required: false,
  },
  noKK: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "KartuKeluarga", // Referensi ke model KartuKeluarga
    required: true,
  },
});

module.exports = mongoose.model("DataWarga", DataWargaSchema);
