const mongooes = require('mongoose');
await mongooes.connect("mongodb://localhost:27017/ecom");
const main = async ()=>{
   
    let eomschema = new mongooes.Schema({
        username:String,
        password:String
    });
    let ecommodel = mongooes.model('admin',eomschema);
    let data = new ecommodel({username:"paras",password:"123"});
    let result = await data.save();
    console.log(result);
}

main();