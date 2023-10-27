import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class DatabaseConfig {
  static async initialize() {
    mongoose.connection.once("open", () => {
      console.log("Database is connected")
    })

    const dbUri = process.env.DATABASE_URL;
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export { DatabaseConfig }
