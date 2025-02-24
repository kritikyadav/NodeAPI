/**
 * Models will contain all the db relaged logic like schema. 
 * 
 */

import mongoose from "mongoose";


const schema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    }
)

export const User = mongoose.model("User", schema);
