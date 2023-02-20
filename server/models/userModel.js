import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name should have >=3 characters"],
    maxLength: [15, "Name should have <15 characters"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isLoved: {
    type: Boolean,
    default: false,
  },
  displayImage: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
