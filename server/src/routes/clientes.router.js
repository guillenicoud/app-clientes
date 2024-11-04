import { Router } from "express";
import { getCliente, getClientes, postCliente, deleteCliente, updateCliente } from "../controllers/clientes.controller.js";

const router = Router();

router.get("/editar/:id", getCliente);
router.get('/', getClientes);
router.post('/', postCliente);
router.delete('/:id', deleteCliente);
router.put('/:id', updateCliente);

export default router;