import connectDB from "@/config/database";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions, Profile, Session } from "next-auth";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }: { profile?: Profile }) {
      // 1. Connect to database
      await connectDB();
      // 2. Check if user exists
      const userExists = await User.findOne({ email: profile?.email });
      // 3. If not, then add user to database
      if (!userExists) {
        // Truncate user name if too long
        const username = profile?.name?.slice(0, 20);

        await User.create({
          email: profile?.email,
          username,
          //@ts-ignore picture
          image: profile?.picture,
        });
      }
      // 4. Return true to allow sign in
      return true;
    },
    // Modifies the session object
    async session({ session }: { session: Session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session?.user?.email });
      // 2. Assign the user id to the session
      if (user && session.user) {
        // @ts-ignore
        session.user.id = user._id.toString();
      }
      // 3. return session
      return session;
    },
  },
};
