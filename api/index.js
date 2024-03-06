const express = require('express');
const Transaction = require('./models/transaction.js')
require('dotenv').config();
const app = express();
const cors = require('cors');
const { default: mongoose, connect } = require('mongoose');
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json('test ok 4');
});

app.post('/api/transaction', async (req, res) => {

    await mongoose.connect(process.env.MONGO_URL);
    const { name, price, description, datetime } = req.body;
    const transaction = await Transaction.create({ name, price, description, datetime });
    res.json(transaction);
});


app.get('/api/transactions', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions) ;
})
app.listen(port, 4000);

// ojlltUjWCMasCXC9