import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.connect( process.env.MONGO_URI, {
        dbName: "backendAPI",
    }).then(() => console.log("Database Connected"))
        .catch(() => console.log(e))
}
