// predefinido porta 8080

//imports 

import express from "express";

//criar aplicação

const app = express()

//controller
import login from"./controller/login.js";

//conexão com o banco
import pool from "./config/database.js";

app.use('/', login)

app.listen(8080, async ()=> {
    try {
        await pool.query("SELECT 1");
        console.log("Conexão com o MySQL estabelecida com sucesso!");
    } catch (err) {
        console.error("Falha ao conectar no MySQL:", err);
    }
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080")
});