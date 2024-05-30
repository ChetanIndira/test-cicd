const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('dummy express application for cicd')
})

app.listen(5000, () => {
    console.info('server running on port 5000')
})