const mongoose = require("mongoose");

const createWarga = async (req, res) => {
  const wargaModel = mongoose.model("DataWarga");
  const {
    nik,
    namaLengkap,
    rt,
    tanggalLahir,
    jenisKelamin,
    agama,
    pekerjaan,
    noKK,
    statusKawin,
  } = req.body;

  for (const field of [
    "nik",
    "statusKawin",
    "namaLengkap",
    "rt",
    "tanggalLahir",
    "jenisKelamin",
    "agama",
    "pekerjaan",
    "noKK",
  ]) {
    if (!req.body[field]) throw `${field} is Required`;
  }
  const duplicateWarga = await wargaModel.findOne({ nik: nik });
  if (duplicateWarga) throw "nik is already exist";
  await wargaModel.create({
    nik: nik,
    namaLengkap: namaLengkap,
    rt: rt,
    tanggalLahir: tanggalLahir,
    jenisKelamin: jenisKelamin,
    agama: agama,
    pekerjaan: pekerjaan,
    noKK: noKK,
    statusKawin: statusKawin,
  });
  res.status(200).json({
    status: "success",
    message: "create DataWarga successfully",
  });
};

module.exports = createWarga;
