const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const clienteRoutes = require('./routes/cliente.routes');

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/cliente', clienteRoutes);

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});
