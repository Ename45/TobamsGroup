import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


export const connectToDatabase = async () => {
  try {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined");
    }

    const isConnected = await mongoose.connect(databaseUrl);
    console.log(`MongoDB connected: ${isConnected.connection.host}`);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

