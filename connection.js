// const { log } = require('console');
const {MongoClient} =require('mongodb');
const url="mongodb://localhost:27017";
const con = new MongoClient(url);
const databse = "ecom";

async function getdata () {  
    let result = await con.connect();
    let db = result.db(databse);
    return db.collection('admin');
}

module.exports = getdata;
