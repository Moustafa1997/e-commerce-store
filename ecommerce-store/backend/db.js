const mongoose = require("mongoose");
require("dotenv/config");
 mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);
