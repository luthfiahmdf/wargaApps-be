const mongoose = require("mongoose");

const createKK = async (req, res) => {
  const kkModel = mongoose.model("KartuKeluarga");
  const { noKK, kepalaKeluarga, rt } = req.body;

  // validation
  for (const field of ["noKK", "kepalaKeluarga", "rt"]) {
    if (!req.body[field]) throw `${field} is Required`;
  }
  const duplicateKK = await kkModel.findOne({ noKK: noKK });
  if (duplicateKK) throw "noKK is already exist";

  await kkModel.create({
    noKK: noKK,
    kepalaKeluarga: kepalaKeluarga,
    rt: rt,
  });

  res.status(200).json({
    status: "success",
    message: "create KartuKeluarga successfully",
  });
};
module.exports = createKK;
