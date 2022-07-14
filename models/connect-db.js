import mongoose from "mongoose";

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/kienweb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect successfuly!!!')
    } catch(err) {
        console.log('Connect Failed!!!')
    }
}
export default connect