const mongoose = require("mongoose");

const updateKK = async (req, res) => {
  const KartuKeluarga = mongoose.model("KartuKeluarga");
  const DataWarga = mongoose.model("DataWarga");

  try {
    const { noKK, kepalaKeluarga, rt, oldNoKK } = req.body;

    const updateKK = await KartuKeluarga.updateOne(
      { noKK: oldNoKK },
      { $set: { noKK: noKK, kepalaKeluarga: kepalaKeluarga, rt: rt } }
    );

    if (updateKK.modifiedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "KartuKeluarga not found",
      });
    }

    await DataWarga.updateMany({ noKK: oldNoKK }, { $set: { noKK: noKK } });

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
