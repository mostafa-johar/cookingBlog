import mongoose from "mongoose";

const useSchema :mongoose.Schema = new mongoose.Schema(
    {
    img : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    
},{
    timestamps : true
}
)

export default mongoose.model('countryFoods',useSchema)

