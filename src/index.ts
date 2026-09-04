// predefinido porta 8080

//imports 

import express, { type Request, type Response } from "express";
import { request } from "node:http";

//criar aplicação

const app = express()

//criando rota principal com o GET

app.get("/", (req:Request, res: Response)=> {
    res.send("Aula dois!")
})


app.listen(8080, ()=> {
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080")
});