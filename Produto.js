import mongoose from "mongoose";

const Produto = new mongoose.Schema({
    titulo: String,
    valor: Number,
    categoria: String
});

export default mongoose.model('Produto', Produto);