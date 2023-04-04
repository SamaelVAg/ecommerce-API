const express = require('express');
const ApiRoutes = require('./routes');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working');
});

ApiRoutes(app);

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));