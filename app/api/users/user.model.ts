import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  name: string;
  email: string;
  pass: string;
}

const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
  email: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
  pass: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
});

const User = mongoose.models.User || mongoose.model<Users>("User", UserSchema);
export default User;