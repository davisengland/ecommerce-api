const products = require('../src/products.json')

const getProducts = (req, res) => {
    if(req.query.price) {
        const more = products.filter(elem => elem.price >= +req.query.price )
        res.status(200).send(more)
    } else {
        res.status(200).send(products)
    }
}

module.exports = getProducts