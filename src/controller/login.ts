import express, { Router, type Request, type Response } from "express";

//criar aplicação

const router = express.Router()

//criando rota principal com o GET

router.get("/", (req:Request, res: Response)=> {
    res.send("Aula Quatro")
})

//exportar a instrução 

export default router