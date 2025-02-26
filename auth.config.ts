import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { url } from "inspector";
import { redirect } from "next/navigation";
import User from "./app/api/users/user.model";
import dbConnect from "./lib/db";
 
export default { providers: [
  credentials({
    name: "Credentials",
    credentials: {
      email: { label: "email", type: "text" },
      pass: { label: "pass", type: "password" },
    },
    async authorize(credentials: any) {
  
      await dbConnect();
      const user = await User.findOne({email: credentials?.email});
      
      if (!user) {
          throw new Error("Wrong Email");
      }
      
      const passwordMatch = await bcrypt.compare(
          credentials!.pass,
          user.pass,
      );
      
      if (!passwordMatch) {
          throw new Error("Wrong Password");
      } 
      return user;
    },
  }),

]} satisfies NextAuthConfig;