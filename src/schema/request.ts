import { IRequest } from "interfaces/IRequest";
import { Schema } from "mongoose";

const requestSchema = new Schema<IRequest>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    project: { type: String, required: true },
    original: { type: Object, required: true},
    hidden: { type: Date, required: false }
}, {timestamps: true});

export default requestSchema;