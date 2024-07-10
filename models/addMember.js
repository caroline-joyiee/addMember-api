import { model, Schema } from "mongoose";

const addMemberSchema = new Schema({
    fullName: {type: String, required: true},
    dateOfBirth: {type: Date},
    sex: {type: String, enum: ['Male', 'Female']},
    contact: {type: String},
    createAt: {type:Date, default: Date.now},
    emergencyName: {type: String, required: true},
    emergencyContact:{type: String, required: true},
    image: {type: String}
});

export const addMemberModel = model('member', addMemberSchema);