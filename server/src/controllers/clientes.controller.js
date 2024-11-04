import { connection } from "../db/connection.js";

export const getCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await connection.query('SELECT * FROM cliente WHERE id = ?', id);
        res.json(result)    
    } catch (error) {
        console.log(error);
    }
}

export const getClientes = async (req, res) => {

    try {
        const [result] = await connection.query('SELECT * FROM cliente');
        console.log(result);
        res.json(result);    
    } catch (error) {
        console.log(error);
    }
    
}

export const updateCliente = async (req, res) => {
    
    try {
        const { id } = req.params;
        // const { nombre } = req.body;
        console.log(req.body);
        res.json(req.body);
    
    } catch (error) {
        console.log(error);    
    }

    // const [ result ] = await connection.query('UPDATE cliente SET nombre = ? WHERE id = ?', id, nombre)

    // console.log(id, nomsbre);
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