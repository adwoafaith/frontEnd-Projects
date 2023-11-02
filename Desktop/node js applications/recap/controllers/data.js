const express = require('express');
const Product = require('../models/productSchema');

const getStaticProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        if (!product) {
            return res.status(400).json({ msg: "Item not in the database" })
        }
        else {
            return res.status(200).json({ data: product })
        }

    } catch (error) {
        console.log(error.message)
    }
}

const getProducts = async (req, res) => {
    const { featured } = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    const product = await Product.find(req.query)
    return res.status(200).json({ product, nbHits: product.length })
}

module.exports = {
    getProducts,
    getStaticProducts,
}