import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  name?: string;
  email: string;
  pass: string;
}

const UserSchema = new mongoose.Schema<UserModel>({
  name: {
    type: String,
    required: [true, "Adj meg egy nevet!"],
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

const User = mongoose.models?.User || mongoose.model<UserModel>("User", UserSchema);
export default User;