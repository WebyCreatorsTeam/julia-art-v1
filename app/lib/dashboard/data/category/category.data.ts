import connectToDatabase from "@/app/lib/mongodb"
import Category from "../../_models/category.model"

export const getCategories = async () => {
    try {
        await connectToDatabase()
        const categories = await Category.find({})
        return JSON.parse(JSON.stringify(categories)); 
        // return categories
    } catch (error) {
        console.log(error)
        return { message: 'Something went wrong', success: false }
    }
}