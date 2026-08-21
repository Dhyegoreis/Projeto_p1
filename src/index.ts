// predefinido porta 8080

//imports 

import express, {Request, Response} from "express";

//criar aplicação

const app = express


app.listen(8080, ()=> {
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080")
})