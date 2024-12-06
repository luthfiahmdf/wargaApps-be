const mongoose = require("mongoose");

const deleteWarga = async (req, res) => {
  const wargaModel = mongoose.model("DataWarga");
  try {
    const { nik } = req.body;

    if (!nik) {
      return res.status(400).json({
        status: "error",
        message: "nik is required",
      });
    }
    const deleteWarga = await wargaModel.deleteOne({ nik: nik });
    if (deleteWarga.deletedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "Warga not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Warga deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = deleteWarga;
