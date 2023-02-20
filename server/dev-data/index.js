import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import axios from "axios";

import User from "../models/userModel.js";

const usersPlaceholderUri = "https://jsonplaceholder.typicode.com/users";
const avatarSVGUrl = (username) =>
  `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

//  connect to the db
mongoose.connect(process.env.DB_REMOTE_URL);

// populate databasewith user data with avatar
const populateDB = async () => {
  // get user data from api
  const res = await axios.get(usersPlaceholderUri);
  const data = res.data;

  for (let index = 0; index < data.length; index++) {
    // get avatarSVG for the user
    const avatarRes = await axios.get(avatarSVGUrl(data[index].username));
    const avatarSVG = avatarRes.data;

    // add to the dataBase
    const { name, username, email, phone } = data[index];
    const createdUser = await User.create({
      name,
      userName: username,
      email,
      phone,
      displayImage: avatarSVG,
    });

    console.log("Created: ", createdUser.userName);
  }
};

// clean database
const cleanDB = async () => {
  const op = await User.remove({});
  console.log("Operation done, ", op);
};

if (process.argv[2] === "populate") await populateDB();
else if (process.argv[2] === "clean") await cleanDB();
else console.log("Unknown command: use populate or clean");
process.exit(0);
