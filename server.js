import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Produto from './Produto.js'

dotenv.config();
const APP = express();
const PORT = 3001;
APP.use(express.json());
APP.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectoooouuuuuuu ao mongo...');        
    } catch (error) {
        console.log('Erro ao Conectar: ', error);
    }
};

connectDB();

//CREATE
APP.post("/produtos", async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.json(produto);        
    } catch (error) {
        res.json({ error: error });    
    }
});


//READ
APP.get("/produtos", async (req, res) => {
    try {
        const produto = await Produto.find();
        res.json(produto); 
    } catch (error) {
        res.json({ error: error }); 
    }
});

//UPDATE
APP.put("/produtos/:id", async (req, res) => {
    try {
        const novoProduto = await Produto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(novoProduto); 
    } catch (error) {
        res.json({ error: error }); 
    }
});

//DELETE
APP.delete("/produtos/:id", async (req, res) => {
    try {
        const excluirProduto = await Produto.findByIdAndDelete(req.params.id);
        res.json(excluirProduto); 
    } catch (error) {
        res.json({ error: error }); 
    }
});

APP.listen(PORT, () => console.log(`O servidor está ativo na porta: ${PORT}`));
