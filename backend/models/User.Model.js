import mongoose from 'mongoose'




const userSchema = new  mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['superadmin', 'admin', 'user'],
    required: true,
    default: 'user',
  },
  authenticated: {
    type: Boolean,
    required: true,
    default: false,
  },
  branchId: {
    type: Number, // or whatever type you need
    default: null,
  },
}, { timestamps: true });

export const UserModel = mongoose.model('User', userSchema);

