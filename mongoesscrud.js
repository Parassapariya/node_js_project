const mongooes = require('mongoose');
mongooes.connect("mongodb://localhost:27017/ecom");

let eomschema = new mongooes.Schema({
    username:String,
    password:String
});

let ecommodel = mongooes.model('paras',eomschema);

const insert = async ()=>{
   
    let data = new ecommodel({username:"pk",password:"12345"});
    let result = await data.save();
    // console.log(result);
}
//insert();


const update = async ()=>{
    let result = await ecommodel.updateOne(
        {username:"pk"},
        {
            $set : 
                {
                    username:"kp",
                    password:"12"
                }
        }
    );
    console.log(result);
}
// update();


const del = async ()=>{
    let result = await ecommodel.deleteOne(
        {username:"kp"}
    );
    console.log(result);
}
// del();


const sel = async ()=>{
    let result = (await ecommodel.find()).toString();
    console.log(result);
}
// sel();
