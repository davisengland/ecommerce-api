const products = require('../src/products.json')

const getProduct = (req, res) => {
    const prod = products.find(elem => elem.id === +req.params.id)
    if(prod) {
        const i = products.findIndex(elem => elem.id === +req.params.id)
        res.status(200).send(products[i])
    } else {
        res.status(500).send('Item not in list')
    }
}

module.exports = getProduct