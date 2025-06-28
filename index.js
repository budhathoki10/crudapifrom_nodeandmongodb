//index.js

let express= require("express")
let appp=express();
let mongoose= require("mongoose")
let route= require('./userRoute')
require('dotenv').config()

appp.use((express.json()))


mongoose.connect('mongodb://localhost:27017/crud_api').then(()=>{console.log("database connect sucessfull")
    appp.use('/api/user',route)
}
)
.catch(()=>{
    console.log("error")
})

appp.listen(5000,()=>{
    console.log("server is runnning in port 5000")
})


