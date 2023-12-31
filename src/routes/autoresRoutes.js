import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutor)
    .get("/autores/:id", AutorController.listarAutorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.deletarAutor)
    
export default router;