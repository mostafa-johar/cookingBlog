import mongoose from "mongoose"
export default defineNitroPlugin(async()=>{
    try{
       const dbConn = await mongoose.connect(useRuntimeConfig().MONGO_URL)
       if(dbConn){
        console.log(`connect dataBase `)
       }
    }catch(err){
      console.log(`There are Error in db : ${err}`)
    }
})