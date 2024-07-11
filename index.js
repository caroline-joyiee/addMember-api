import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { addMemberRouter } from "./routes/addMember-route.js";
import { dbConnection } from "./db.js";



//create an app
const app = express();


//middleware
app.use(express.json());


dbConnection();




app.use(express.static('image'));
app.use (addMemberRouter);





//create port
const port = process.env.PORT || 4000
app.listen(port, ( ) => {
    console.log(`App is working on ${port} channel`)
});