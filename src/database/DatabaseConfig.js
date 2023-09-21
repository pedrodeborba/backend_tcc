import mongoose from "mongoose";

class DatabaseConfig {
  static async initialize() {
    mongoose.connection.once("open", () => {
      console.log("Database is connected")
    })

    await mongoose.connect("mongodb+srv://arnia_luis:12345@arnia.qw3dnnl.mongodb.net/joao")
  }
}

export { DatabaseConfig }
