import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // e.g., 2023-24
    },
    code: {
      type: String,
      required: true,
      unique: true, // e.g., 23-24
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SessionModel = mongoose.model('Session', sessionSchema);
