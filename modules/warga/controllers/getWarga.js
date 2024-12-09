const mongoose = require("mongoose");

const getWarga = async (req, res) => {
  const wargaModel = mongoose.model("DataWarga");
  try {
    const { nik } = req.query;
    let data;
    if (nik) {
      data = await wargaModel.findOne({ nik: nik });
      if (!data) {
        return res.status(404).json({
          status: "fail",
          message: "Warga not found",
        });
      }
    } else {
      data = await wargaModel.find();
    }
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = getWarga;
