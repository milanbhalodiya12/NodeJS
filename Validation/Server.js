const express = require('express')
const app = express();
app.use(express.json());

const router = require('./Routes/products.routes')

app.use('/apis', router)
app.listen(5000, () => { console.log(`Running on port 5000`); })