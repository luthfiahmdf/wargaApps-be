const mongoose = require("mongoose");

const updateKK = async (req, res) => {
  const kkModel = mongoose.model("KartuKeluarga");
  try {
    const { noKK, kepalaKeluarga, rt, _id } = req.body;
    const updateKK = await kkModel.updateOne(
      { _id: _id },
      { $set: { kepalaKeluarga: kepalaKeluarga, rt: rt, noKK: noKK } }
    );
    if (updateKK.modifiedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "KartuKeluarga not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "KartuKeluarga updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};
module.exports = updateKK;
