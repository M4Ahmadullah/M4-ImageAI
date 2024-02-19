import { Schema, models, model } from "mongoose"

// export interface IUser extends Document {
//     title: string;
//     clerkId: string;
//     email?: string;
//     username?: string;
//     photo?: Document;
//     firstName?: string;
//     lastName?: string;
//     planId?: string;
//     creditBalance?: number;
// }

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: Document, required: true },
    firstName: { type: String, reuired: true },
    lastName: { type: String, required: true },
    planId: { type: Number, required: true },
    creditBalance: { type: Number, required: true },
})

const User = models?.User || model('User', UserSchema);

export default User

