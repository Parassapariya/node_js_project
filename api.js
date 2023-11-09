const express = require('express');
const connect = require('./connection');
const mongodb = require('mongodb');


const app = express();

app.use(express.json());

//api get method
    app.get('/',async (req,res)=>{
        let data = await connect();
        let fechdata = await data.find().toArray();
        res.send(fechdata);
    });

//api post method

    app.post('/',async (req,res)=>{
        let data = await connect();
        let fechdata = await data.insertOne(req.body);
        res.send(fechdata);
    });

//api put(update) method

    app.put('/:username',async (req,res)=>{
        let data = await connect();
        let fechdata = await data.updateOne(
            {username: req.params.username},
            {$set : req.body}
            );
        res.send(fechdata);
    });

//api delete method

    app.delete('/:id',async (req,res)=>{
        let data = await connect();
        let fechdata = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
        res.send(fechdata);
    });


app.listen(1000);