import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
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
  website: {
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
