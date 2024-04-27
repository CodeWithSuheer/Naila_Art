import mongoose from 'mongoose';

const bagsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true,"category required"],
  },
  color: {
    type: String,
    required: [true,"color required"],
  },
  r_Date: {
    type: Date,
    required: [true,"R_Date required"],
  },
  recently: {
    type: String,
    required: [true,"Recently required"],
  },
  quantity: {
    type: Number,
    required: [true,"Quantity required"],
  }
}, { timestamps: true });

export const BagsModel = mongoose.model('Bags', bagsSchema);

