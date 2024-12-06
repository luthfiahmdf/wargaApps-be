const mongoose = require("mongoose");

const deleteKK = async (req, res) => {
  const kkModel = mongoose.model("KartuKeluarga");
  try {
    const { noKK } = req.body;

    if (!noKK) {
      return res.status(400).json({
        status: "error",
        message: "noKK is required",
      });
    }

    const deleteKK = await kkModel.deleteOne({ noKK: noKK });

    if (deleteKK.deletedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "KartuKeluarga not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "KartuKeluarga deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = deleteKK;
