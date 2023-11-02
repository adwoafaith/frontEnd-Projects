const express = require('express')
const connect = require('./database/connect')
const mongoose = require('mongoose')
const productJson = require ('./product.json')
const Product = require('./models/productSchema')
require('dotenv').config()

const start = async() =>{
    try {
        await connect(process.env.DATABASE_CONNECTION);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log('sucess')
        process.exit(0);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start()