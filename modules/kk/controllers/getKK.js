const mongoose = require("mongoose");

const getKK = async (req, res) => {
  const kkModel = mongoose.model("KartuKeluarga");

  try {
    const { noKK } = req.query;

    let data;
    if (noKK) {
      data = await kkModel.findOne({ noKK: noKK });
      if (!data) {
        return res.status(404).json({
          status: "fail",
          message: "KartuKeluarga not found",
        });
      }
    } else {
      data = await kkModel.find();
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

module.exports = getKK;
