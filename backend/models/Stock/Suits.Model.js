import { DataTypes } from "sequelize";
import sequelize from "../database/PostgreSQL.js";

const SuitsModel = sequelize.define(
  "Suit",
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color:{
        type:DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    cost_price:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    sale_price:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    d_no:{
        type:DataTypes.STRING,
        allowNull: false
    }
  },
  { timestamps: true }
);
export default SuitsModel;
