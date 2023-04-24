import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/notas.js'
import mongodb from './mongodb.js'
import dotenv from 'dotenv';

// Carga las variables de entorno de .env en process.env
dotenv.config();

//APP server
const app = express()

//Server port
const port = process.env.PORT || 3001

//Confing
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

//Routes
app.use('/api/',router)

//Call server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
