const mongoose = require("mongoose");

const updateKK = async (req, res) => {
  const KartuKeluarga = mongoose.model("KartuKeluarga");
  const DataWarga = mongoose.model("DataWarga");

  try {
    const { noKK, kepalaKeluarga, rt, oldNoKK } = req.body; // Menggunakan oldNoKK untuk mengetahui noKK sebelumnya

    // Update KartuKeluarga
    const updateKK = await KartuKeluarga.updateOne(
      { noKK: oldNoKK }, // Cari data KartuKeluarga berdasarkan oldNoKK
      { $set: { noKK: noKK, kepalaKeluarga: kepalaKeluarga, rt: rt } }
    );

    if (updateKK.modifiedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "KartuKeluarga not found",
      });
    }

    // Update noKK pada DataWarga yang menggunakan oldNoKK
    await DataWarga.updateMany(
      { noKK: oldNoKK }, // Cari DataWarga yang memiliki noKK lama
      { $set: { noKK: noKK } } // Perbarui noKK menjadi noKK baru
    );

    res.status(200).json({
      status: "success",
      message: "KartuKeluarga and related DataWarga updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = updateKK;
