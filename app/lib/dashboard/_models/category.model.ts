import mongoose, { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
    type: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    subCategory: [
        {
            title: {
                type: String,
                require: true
            }, 
            img: {
                type: String,
                require: true
            }
        }]
})  

const Category = mongoose.models.Category || model("Category", CategorySchema)
export default Category