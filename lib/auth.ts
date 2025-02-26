import User from "@/app/api/users/user.model";
import bcrypt from "bcryptjs";
import credentials from "next-auth/providers/credentials";
import dbConnect from "./db";
import { NextAuthConfig } from "next-auth";

export const AuthConfig: NextAuthConfig  = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
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
            user.pass
        );
        
        if (!passwordMatch) {
            throw new Error("Wrong Password");
        } 
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3*60*60
  },
  callbacks: {
    async jwt({token, user, session}) {
      console.log( "jwt callback", {token, user, session});
      return token;
    },
    async session({token, user, session}) {
      console.log( "session callback", {token, user, session});
      return session;
    }
  }
}