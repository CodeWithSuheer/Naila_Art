import mongoose from 'mongoose';



const laceSchema = new mongoose.Schema({
  bill_no: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  r_date: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  cost_price: {
    type: Number,
    required: true
  },
  recently: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const LaceModel = mongoose.model('Lace', laceSchema);


