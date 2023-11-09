// const getdata = require('./connection');
// find data using promiss handale

            // getdata().then((res)=>{
            //     res.find().toArray().then((data)=>{
            //         console.log(data);
            //     })
            // });

//find data using async and await use

            // let data = async ()=>{
            //     let dt = await getdata();
            //     let paras = await dt.find().toArray();
            //     console.log(paras);
            // };
            // data();

const express = require('express');


const app = express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('list')
});

app.post("/sub",(req,res)=>{
   console.log(req.body.username); 
});

app.listen(2000);