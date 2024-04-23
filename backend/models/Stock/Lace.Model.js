import { DataTypes } from "sequelize";
import sequelize from "../database/PostgreSQL.js";

const LaceModel = sequelize.define(
  "Lace",
  {
    bill_no:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
      },
    r_date:{
        type:DataTypes.DATE,
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
    recently:{
        type:DataTypes.STRING,
        allowNull: false
    },
},
  { timestamps: true }
);
export default LaceModel;
