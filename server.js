import { app } from "./app.js";
import { connectDb } from "./data/database.js";

// establish connection to db. 
connectDb();

// this project is working on localhost:4000
app.listen(process.env.PORT , () => {
    console.log('Server is running on http://localhost:4000/users/all');
});
