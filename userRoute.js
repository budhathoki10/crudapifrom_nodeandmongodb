
let express= require('express')
let {controller,create,fetch,update, deletes}= require('./control')
let route= express.Router();
route.get('/getalluser',fetch)
route.post('/create',create)
route.put('/update/:id',update)
route.delete('/delete/:id',deletes)
module.exports= route