import { connection } from "../db/connection.js";

export const getClientes = async (req, res) => {

    const [result] = await connection.query('SELECT * FROM cliente');
    console.log(result);
    res.json(result);
}

export const postCliente = async (req, res) => {
    try {
        const { name, address, phonenumber, mail } = req.body;
        const [result] = await connection.query("INSERT INTO cliente (name, address, phonenumber, mail) VALUES (?, ?, ?, ?)", [name, address, phonenumber, mail]);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await connection.query("DELETE from cliente WHERE id = ?", id);
    } catch (error) {
        console.log(error);
    }
}