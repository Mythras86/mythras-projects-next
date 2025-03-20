import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3*60*60
  },
  callbacks: {
    async jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.name) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.name = session.name
      }
      return token;
    },
    async session({ session, trigger, newSession }) {
      if (trigger === "update" && newSession?.name) {
        session.name = newSession.name
      }
      return session;
    }
  },
  ...authConfig
});