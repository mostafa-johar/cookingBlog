import mongoose, { Schema } from "mongoose";
const useSchema :mongoose.Schema = new mongoose.Schema(
    {
        title :{
            type : String,
            required : true
        },
        description :{
            type : String,
            required : true
        },
        Source :{
            type : String,
            required : true
        },
        ingredients :{
            type : Array,
            required : true
        },
        category :{
            type : String,
            required : true
        },
        img :{
            type : String,
            required : true
        },
        slug :{
            type : String,
            required : true
        },
        email :{
            type : String,
            // required : true
        },

    },{
        timestamps : true
    }
)

export default mongoose.model('Blog',useSchema)
