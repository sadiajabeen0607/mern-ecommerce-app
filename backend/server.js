const app = require("./app");
const PORT = 3050 || process.env.PORT;
const cloudinary = require("cloudinary");

const dotenv = require("dotenv");
const dbConnect = require("./config/db");

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });
dbConnect();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
