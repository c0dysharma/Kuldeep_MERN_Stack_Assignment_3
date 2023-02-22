import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send({ success: true, data: users, message: "ok" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, data: [], message: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  const { id, name, email, phone, website } = req.body;
  try {
    // if no id provided return error
    // find user if exists
    if (!id && !(await User.findById(id)))
      return res.status(404).send({
        success: false,
        data: [],
        message: "Requested resource not found",
      });

    const data = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        website,
      },
      { new: true }
    );

    return res
      .status(200)
      .send({ success: true, data, message: "Updated user." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, data: [], message: "Internal Server Error" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id && !(await User.findById(id)))
      return res.status(404).send({
        success: false,
        data: [],
        message: "Requested resource not found",
      });

    //delete the user
    const data = await User.findByIdAndDelete(id, { returnDocument: true });
    return res
      .status(200)
      .send({ success: true, data, message: "Deleted user." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, data: [], message: "Internal Server Error" });
  }
};
