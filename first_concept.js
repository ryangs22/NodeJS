/* const express = require('express');
const server = express();

// http://localhost:3000/hello?nome=Ryan&idade=20
// Query Params = ?nome=Ryan&idade=20

// http://localhost:3000/hello/Ryan/
// Route Params = /hello/:nome

server.use(express.json());

let customers = [
    { id: 1, name: "Ryan", site: "https://rgsportfolio.vercel.app/" },
    { id: 2, name: "Google", site: "https://www.google.com" },
    { id: 3, name: "Nvidia", site: "https://www.nvidia.com" }
];

server.get('/customers', (req, res) => {
    return res.json(customers);
});

server.get('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
});

server.post('/customers', (req, res) => {
    const { name, site } = req.body;
    const nextID = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;

    const newCustomer = { id: nextID, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

server.put('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >=0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id: parseInt(id), name, site };
    }

    return res.status(status).json(customers[index]);
})

server.delete('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >=0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

server.listen(3000); */
