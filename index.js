import express from "express";
import router from "./router/router.js";

//aplica seguridad
import cors from "cors";
//Variables de entorno
import dotenv from "dotenv";

const port = process.env.port || 4000;
const host = process.env.HOST || '0.0.0.0';

dotenv.config({path: '.env'});

const app = express();

app.use("/", router);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});