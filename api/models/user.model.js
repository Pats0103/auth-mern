import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
    },  
},{timestamps: true})

userSchema.pre('save', async function (next) {
    this.password = await bcryptjs.hash(this.password, 10);
    next();
}
);

const User = mongoose.model('User', userSchema);

export default User;