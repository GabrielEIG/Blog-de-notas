import mongoose from 'mongoose'
import dotenv from 'dotenv';


// Carga las variables de entorno de .env en process.env
dotenv.config();

const dbURI = process.env.URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000})
  .then(() => console.log("Conexion exitosa a la base de datos"))
  .catch((err) => console.log(err));

const mongodb = mongoose.connection

export default mongodb
