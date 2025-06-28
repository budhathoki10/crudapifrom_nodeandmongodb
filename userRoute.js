//user route
let express= require('express')
let {controller,create,fetch}= require('./control')
let route= express.Router();
route.get('/getalluser',fetch)
route.post('/create',create)
module.exports= route