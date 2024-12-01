const mongoose = require("mongoose");

const DataWargaSchema = new mongoose.Schema({
  Nama: {
    type: String,
    required: true,
  },
  NIK: {
    type: String,
    required: true,
    unique: true,
  },
  Alamat: {
    type: String,
    required: true,
  },
  TanggalLahir: {
    type: Date,
    required: true,
  },
  JenisKelamin: {
    type: String,
    enum: ["Laki-laki", "Perempuan"],
    required: true,
  },
  Agama: {
    type: String,
    required: true,
  },
  Pekerjaan: {
    type: String,
    required: true,
  },
  StatusKawin: {
    type: String,
    enum: ["Belum Kawin", "Kawin", "Cerai"],
    required: true,
  },
  NoHP: {
    type: String,
    required: false,
  },
  NoKK: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "KartuKeluarga", // Referensi ke model KartuKeluarga
    required: true,
  },
});

module.exports = mongoose.model("DataWarga", DataWargaSchema);
