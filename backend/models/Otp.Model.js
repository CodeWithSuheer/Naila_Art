import mongoose from 'mongoose'
const { Schema } = mongoose

const otpSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  otp: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export const OtpModel = mongoose.model('Otp', otpSchema);


