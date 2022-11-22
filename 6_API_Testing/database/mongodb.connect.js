const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/API_Testing",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("connected to database");
      } else {
        console.log(err);
      }
    }
  );
};

module.exports = { connect };
