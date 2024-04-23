import { DataTypes } from "sequelize";
import sequelize from "../database/PostgreSQL.js";

const OtpModel = sequelize.define(
  "Otp",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    otp:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    timestamp:{
        type:DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    }
  },
  { timestamps: true }
);
export default OtpModel;
