const mongoose = require("mongoose");

const connectDB = async (uri) => {
  const mongoUri =
    uri ||
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/mern-portfolio";
  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
