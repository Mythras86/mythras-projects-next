import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3*60*60
  },
  callbacks: {
    async jwt({token, user, session}) {
      return token;
    },
    async session({token, user, session}) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  }
  ...authConfig
});