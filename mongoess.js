const mongooes = require('mongoose');
mongooes.connect("mongodb://localhost:27017/ecom");

let eomschema = new mongooes.Schema({
    username:String,
    password:String
});

const main = async ()=>{
    let ecommodel = mongooes.model('admin',eomschema);
    let data = new ecommodel({username:"paras",password:"123"});
    let result = await data.save();
    console.log(result);
}

main();