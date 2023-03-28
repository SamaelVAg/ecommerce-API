const express = require('express');

const PORT = 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));