import express from 'express';
import router from './routes/clientes.router.js';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});

