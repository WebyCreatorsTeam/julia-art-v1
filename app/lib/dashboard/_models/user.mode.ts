import mongoose, { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    userEmail: {
        type: String,
        require: true
    },
    userPassword: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    }
})

const User = mongoose.models.User || model("User", UserSchema)
export default User