const Category = require('../models/category');
const Product = require('../models/product');

const createCategory = (req, res) => {
    const {name} = req.body
    const { id } = req.params
    const newCategory = new Category({
        name
    })
    newCategory.save((error, category) => {
        if(error) {
            console.log('1', error)
            return res.status(400).send({message: "No se ha podido crear la categoria"})
        }
        if(id == undefined || id == null || id == ''){
            return res.status(201).send(category)
        }
        Product.updateOne({ _id: id }, { $push:{category:category._id }}, (error, product) => {
            if (error) {
                console.log('2', error)
                return res.status(400).send({ message: "No se pudo actualizar el producto "})
            }
            if (!product) {
                return res.status(404).send({ message: "No se encontro el producto "})
            }
            return res.status(200).send({ message: "Producto modificado" })
        })
    })
}

module.exports = {
    createCategory
}