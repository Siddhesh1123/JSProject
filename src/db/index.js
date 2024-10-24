import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb =async () => {
    try {
        const res = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`) 
        console.log("MONGODB CONNECTION SUCCESSFUL, Host:", res.connection.host)
    }catch (error) {
        console.log("MONGODB CONNECTION ERROR", error)
        process.exit(1)
    }
}

export default connectdb;