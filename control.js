//control.js 
const user= require('./Schema')
let create= async (req,res)=>{
    try {
        const userdata= new user(req.body)
        const {email}=userdata;
        const userexists= await user.findOne({email})  
        if(userexists){
            return res.status(400).json({message:"user already exits "})
        }
        else{
            const save_user =await userdata.save()
            res.status(200).json({message:save_user})
        }
        
    } catch (error) {
        res.send(5000).json({error:"error"})
        
    }

}

let fetch= async (req,res)=>{
    try {
      const users= await user.find()
      if(users.length===0){
        res.status(404).json({message:"database is empty"})
      }
      else{
         res.status(200).json(users)
      }
        
    } catch (error) {
        res.send(500).json({error:"error"})
        
    }


}


let update= async (req,res)=>{
    try {
        const id= req.params.id;
        const findUser= await user.findOne({_id:id})
        if(!findUser){
              res.status(404).json({message:"this id is not found"})
        }
        else{
            const update= await user.findByIdAndUpdate(id,req.body,{new:true})
              res.status(200).json(update)

        }
      
    } catch (error) {
        res.send(500).json({error:"error"})
        
    }
}

let deletes = async (req,res)=>{
    try {
        const id= req.params.id;
        const findUser= await user.findById({_id:id})
        if(!findUser){
              res.status(404).json({message:"this id is not found"})
        }
        else{
            const deletes= await user.findOneAndDelete(id,req.body,{new:true})
              res.status(200).json(deletes)

        }
      
    } catch (error) {
        res.send(500).json({error:"error"})
        
    }
}


let controller= async (req,res)=>{
try {
    return res.json("hello")
    
} catch (error) {
    res.send(5000).json({error:"error"})
    
}
}

module.exports={create,fetch,controller,update,deletes}
