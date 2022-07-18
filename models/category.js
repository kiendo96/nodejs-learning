import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},{timestamps: {createdAt: 'create_at'}})

export default mongoose.model('Category', categorySchema)