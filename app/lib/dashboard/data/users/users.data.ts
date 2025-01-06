import connectToDatabase from "@/app/lib/mongodb"
import User from "../../_models/user.mode"
// import Category from "../../_models/category.model"

export const getUsers = async () => {
    try {
        await connectToDatabase()
        const users = await User.find({}).select("-userPassword")
        return JSON.parse(JSON.stringify(users)); 
    } catch (error) {
        console.error(error)
    }
}