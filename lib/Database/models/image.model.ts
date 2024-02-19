import { Schema } from "mongoose";
import { models } from "mongoose";
import { model } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    // url: ;
    width?: number;
    hieght?: number;
    config?: object;
    transformationUrl?: string;
    aspectRadio?: string;
    color?: string; 
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    url: { type: String, required: true },
    width: { type: Number },
    hieght: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRadio: { type: String }, 
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image