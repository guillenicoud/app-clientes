import { Router } from "express";
import { getClientes, postCliente, deleteCliente } from "../controllers/clientes.controller.js";

const router = Router();

router.get('/', getClientes);
router.post('/', postCliente);
router.delete('/:id', deleteCliente);

export default router;