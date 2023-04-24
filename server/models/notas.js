import mongoose from "mongoose";

//Schema
const schema = mongoose.Schema({
    title: String,
    content: String
})

const Nota = mongoose.model('Notas', schema);

export default Nota;