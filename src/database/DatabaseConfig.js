import mongoose from "mongoose";

class DatabaseConfig {
  static async initialize() {
    mongoose.connection.once("open", () => {
      console.log("Database is connected")
    })

    await mongoose.connect("mongodb+srv://admin:isEx1DAqFiQEo2k5@tcc.zpk1kby.mongodb.net/tcc")
  }
}

export { DatabaseConfig }
