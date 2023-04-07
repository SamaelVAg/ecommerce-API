const express = require('express');
const cors = require('cors');
const ApiRoutes = require('./routes');
const errorHandlerRouter = require('./routes/errorHandler.routes');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working');
});

ApiRoutes(app);

errorHandlerRouter(app);

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));