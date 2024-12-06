const mongoose = require("mongoose");

const getWarga = async (req, res) => {
  const wargaModel = mongoose.model("DataWarga");
  try {
    const warga = await wargaModel.find().populate({
      path: "noKK",
      select: "noKK",
    });

    const transformedWarga = warga.map((item) => {
      const { noKK, ...rest } = item.toObject();
      return {
        ...rest,
        noKK: noKK?.noKK || null,
      };
    });

    res.status(200).json({
      status: "success",
      data: transformedWarga,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = getWarga;
