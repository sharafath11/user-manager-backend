import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  age: number;
  isActive: boolean;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", UserSchema);