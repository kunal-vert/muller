import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email : {type: String, unique: true, required: true},
    password: { type: String, required: true }
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link:  String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}], // it will be in object form in bunch
    userId :{type: mongoose.Types.ObjectId, ref: "User", require: true}
})

export const ContentModel = model("Content", ContentSchema)

const LinkSchema = new Schema({
    Hash: String,
    userId :{type: mongoose.Types.ObjectId, ref: "User", require: true, unique: true }
})

export const LinkModel  = model("Links", LinkSchema)
