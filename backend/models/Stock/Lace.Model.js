import mongoose from 'mongoose';



const laceSchema = new mongoose.Schema({
  bill_no: {
    type: Number,
    required: [true,"Bill number required"],
  },
  name: {
    type: String,
    required: [true,"Name required"],
  },
  category: {
    type: String,
    required: [true,"Category required"],
  },
  r_date: {
    type: Date,
    required: [true,"R_date required"],
  },
  quantity: {
    type: Number,
    required: [true,"Quantity required"],
  },
  cost_price: {
    type: Number,
    required: [true,"cost price required"],
  },
  recently: {
    type: String,
    required: [true,"Recently required"],
  }
}, { timestamps: true });

export const LaceModel = mongoose.model('Lace', laceSchema);


