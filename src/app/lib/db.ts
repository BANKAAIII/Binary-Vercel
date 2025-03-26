import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

 async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "ServerlessBinary",
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

export default connectDB;