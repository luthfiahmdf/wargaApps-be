const mongoose = require("mongoose");

const createKK = async (req, res) => {
  const kkModel = mongoose.model("KartuKeluarga");
  const { noKK, kepalaKeluarga, alamat } = req.body;

  // validation
  for (const field of ["noKK", "kepalaKeluarga", "alamat"]) {
    if (!req.body[field]) throw `${field} is Required`;
  }
  const duplicateKK = await kkModel.findOne({ noKK: noKK });
  if (duplicateKK) throw "noKK is already exist";

  await kkModel.create({
    noKK: noKK,
    kepalaKeluarga: kepalaKeluarga,
    alamat: alamat,
  });

  res.status(200).json({
    status: "success",
    message: "create KartuKeluarga successfully",
  });
};
module.exports = createKK;
