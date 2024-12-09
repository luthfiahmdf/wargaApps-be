const mongoose = require("mongoose");

const dashboardCard = async (req, res) => {
  const wargaModel = mongoose.model("DataWarga");
  const kkModel = mongoose.model("KartuKeluarga");
  try {
    const jumlahWarga = await wargaModel.countDocuments();
    const jumlahKK = await kkModel.countDocuments();
    const jumlahWargaRT01 = await wargaModel.countDocuments({ rt: "01" });
    const jumlahWargaRT02 = await wargaModel.countDocuments({ rt: "02" });

    res.status(200).json({
      status: "success",
      jumlahWarga: jumlahWarga,
      jumlahKK: jumlahKK,
      jumlahWargaRT01: jumlahWargaRT01,
      jumlahWargaRT02: jumlahWargaRT02,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = dashboardCard;
