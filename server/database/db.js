import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;




const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-wz0lu5b-shard-00-00.ch525q8.mongodb.net:27017,ac-wz0lu5b-shard-00-01.ch525q8.mongodb.net:27017,ac-wz0lu5b-shard-00-02.ch525q8.mongodb.net:27017/?ssl=true&replicaSet=atlas-2161rp-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
       await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
       console.log("Database connected Successfully");

    } catch (error) {
        console.log("Error while connecting with the database ", error);
    }
}

export default Connection;