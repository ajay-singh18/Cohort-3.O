import mongoose, { SchemaType } from "mongoose";
import { model, Schema } from "mongoose";
import { string } from "zod";
const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const userModel = model("User", userSchema);
const contentSchema = new Schema({
    link: String,
    type: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: String, ref: 'User', required: true
    }
});
const contentModel = model("Content", contentSchema);
export { userModel, contentModel };
//# sourceMappingURL=db.js.map