const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(
      // "mongodb+srv://sadiajabeen0607:sadia@cluster0.62jlkzu.mongodb.net/"
      process.env.MONGO_URL
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};

module.exports = dbConnect;
