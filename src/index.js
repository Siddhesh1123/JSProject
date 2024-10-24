import dotenv from 'dotenv';
import connectdb from './db/index.js';
import { app } from './app.js';

dotenv.config(
    {
        path: './env'
    }
);

connectdb()
    .then(
        () =>{
            app.listen(process.env.PORT || 4000,() => {
                console.log(`Server ruuning on the port : ${process.env.PORT || 4000}`)
            })
        }
    )
    .catch((error) => {
        console.log("MONGODB CONNECTION FAILED", error)

     });