import { DataTypes } from "sequelize";
import sequelize from "../database/PostgreSQL.js";

const BranchModel = sequelize.define(
  "Branches",
  {
    branchName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: true }
);
export default BranchModel;
