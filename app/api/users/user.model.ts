import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name?: string;
  email: string;
  pass: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, "Adj meg egy nevet!"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Adj meg egy email címet!"],
    unique: true
  },
  pass: {
    type: String,
    required: [true, "Adj meg egy jelszót!"],
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;