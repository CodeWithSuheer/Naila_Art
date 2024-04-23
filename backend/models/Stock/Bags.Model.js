import { DataTypes } from "sequelize";
import sequelize from "../database/PostgreSQL.js";

const BagsModel = sequelize.define(
  "Bags",
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color:{
        type:DataTypes.STRING,
        allowNull: false
    },
    r_Date:{
        type : DataTypes.DATE,
        allowNull: false
    },
    recently:{
        type:DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
  },
  { timestamps: true }
);
export default BagsModel;
