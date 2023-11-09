const express = require('express');
const flash = require('express-flash');
const getdata = require('./connection');
const bodypar = require('body-parser');


const ejs = require('ejs');
const app = express();

app.use(bodypar.urlencoded({ extended: true }));
app.set('view engine','ejs');

let data1;
app.get('/',(req,res)=>{
   
    res.render('home');
});

app.post('/Data-insert',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    if (username != "" || password != "") {
        let main = async ()=>{
            let data = await getdata();
             data1 = await data.insertOne({
                username:`${username}`,
                password:`${password}`
            });
            console.log(data1);
        };
        
        main();
        res.redirect('/');
    }
    else
    {
        
        res.render('home');
    }
    
});



// let main = async ()=>{
//     let data = await getdata();
//     let data1 = await data.find().toArray();
//     console.log(data1);
    
// };

// main();


app.listen(1000,()=>{
    console.log("server is running");
})