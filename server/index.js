const express = require('express')
const getProducts = require('./getProducts')
const products = require('../src/products.json')
const getProduct = require('./getProduct')
const app = express()
// console.log(app)

app.use(express.json())

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(3001, () => console.log('Server is running on 3001'))

