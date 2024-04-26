import mongoose from 'mongoose';



const suitsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  color: {
    type: String,
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
  sale_price: {
    type: Number,
    required: true
  },
  d_no: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const SuitsModel = mongoose.model('Suit', suitsSchema);


