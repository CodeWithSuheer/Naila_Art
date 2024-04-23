import { DataTypes } from "sequelize";
import sequelize from "../database/PostgreSQL.js";

const UserModel = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("superadmin", "admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
    authenticated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    branchId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
  },
  { timestamps: true }
);

export default UserModel;


