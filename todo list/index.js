

const express = require('express');
const bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine','ejs');

let demos = []; 

app.get('/',(req,res)=>{
    res.render('demo',{todolist : demos});
});

app.post('/sub',(req,res)=>{
  let demo = req.body.username; 
  demos.push(demo);
   res.redirect('/');
});


app.listen(2000);