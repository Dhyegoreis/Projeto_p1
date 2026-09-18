import express, { Router } from "express";
//criar aplicação
const router = express.Router();
//criando rota principal com o GET
router.get("/", (req, res) => {
    res.send("Aula Quatro");
});
//exportar a instrução 
export default router;
//# sourceMappingURL=login.js.map