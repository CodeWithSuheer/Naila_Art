import UserModel from "../models/User.Model.js";

export const superAdminOnly = async (req, res, next) => {
  const id = req.session.userId;
  if (!id) {
    return res.status(401).json({ message: "Please Login First" });
  }
  const user = await UserModel.findByPk(id);
  if (user.role !== "superadmin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};