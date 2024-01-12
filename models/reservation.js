const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  id_user:String,
  name_user: String,
  num_tel:String,
  name_service: String,
  prix: Number,
  date: String,
  status: String,

});
const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
