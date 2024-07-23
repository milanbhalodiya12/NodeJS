const express = require('express')
const app = express();
app.use(express.json());
app.get('/products', (req, res) => {
    res.json({
        "status": "success",
        "data": [
            { "id": 1, "name": "Legion 7", "price": 429000 },
            { "id": 2, "name": "Inspiron 5210", "price": 65000 },
            { "id": 3, "name": "Asus Viviobook", "price": 190000 },
            { "id": 4, "name": "Amd Ryson", "price": 45000 },
            { "id": 5, "name": "Legion 7", "price": 429000 },
        ],
        "message": "Retrive Successfully"
    })
})

app.get('/products/d:i', (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "Success",
        "data": { "id": id, "name": "Legion 7", "price": 429000 },
        "message": "retrive Successfully"
    })
})

app.post('/products', (req, res) => {
    res.json({
        "status": "Success",
        "data": { "name": req.body.name, "price": req.body.price },
        "message": "Inserted Successfully"
    })
})

app.put('/products', (req, res) => {
    res.json({
        "status": "Success",
        "data": { "id": req.body.id, "name": req.body.name, "price": req.body.price },
        "message": "Updated Successfully"
    })
})

app.delete('/products', (req, res) => {
    res.json({
        "status": "Success",
        "data": { "id": req.body.id },
        "message": "Deleted Successfully"
    })
})


app.listen(5000, () => { console.log(`Running on port 5000`); })