import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const user = process.env.DB_USER;
const password = process.env.DB_PASS;



async function connectDatabase() {

    try {

        console.log(user);
        console.log(password);
        await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.aqmwa6g.mongodb.net/`);
        console.log('conectado');
        return true;
    } catch (error) {
        throw "Houve um erro ao conectar: " + error;
    }
    

}

export default connectDatabase;
