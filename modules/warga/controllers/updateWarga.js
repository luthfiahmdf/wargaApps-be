const mongoose = require("mongoose");

const updateWarga = async (req, res) => {
  const wargaModel = mongoose.model("DataWarga");
  try {
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
      _id,
    } = req.body;
    const updateWarga = await wargaModel.updateOne(
      { _id: _id },
      {
        $set: {
          namaLengkap: namaLengkap,
          rt: rt,
          tanggalLahir: tanggalLahir,
          jenisKelamin: jenisKelamin,
          agama: agama,
          pekerjaan: pekerjaan,
          noKK: noKK,
          statusKawin: statusKawin,
          nik: nik,
        },
      }
    );
    if (updateWarga.modifiedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "Warga not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Warga updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = updateWarga;
