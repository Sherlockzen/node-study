const express = require('express');
const res = require('express/lib/response');

const app = express();

const port = 8080;

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

