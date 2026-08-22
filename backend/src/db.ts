import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email : {type: String, unique: true, required: true},
    password: { type: String, required: true }
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    Title: String,
    Link:  String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}], // it will be in object form in bunch
    userId :{type: mongoose.Types.ObjectId, ref: "User", require: true}
})

export const ContentModel = model("Content", ContentSchema)