const express = require('express');
const cors = require('cors');
const ApiRoutes = require('./routes');
const errorHandlerRouter = require('./routes/errorHandler.routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
ApiRoutes(app);

errorHandlerRouter(app);

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));