import mongoose from 'mongoose';


const bagsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  r_Date: {
    type: Date,
    required: true
  },
  recently: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export const BagsModel = mongoose.model('Bags', bagsSchema);

