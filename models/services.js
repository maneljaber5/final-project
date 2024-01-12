const mongoose = require("mongoose");
const schema = mongoose.Schema;

const serviceSchema = new schema({
  name_service: String,
  category: String,
  prix: Number,
  image: String,
 

});
const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
