// predefinido porta 8080
//imports 
import express from "express";
//criar aplicação
const app = express();
//controller
import login from "./controller/login.js";
app.use('/', login);
app.listen(8080, () => {
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080");
});
//# sourceMappingURL=index.js.map