/** @format */
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                let user: User | null = null;

                const res = await fetch(`${process.env.API_URL}/adminAccounts/accounts`);
                const dbAccounts = await res.json();

                const account = dbAccounts.find(
                    (acc: any) =>
                        acc.username === credentials?.username &&
                        bcrypt.compareSync(credentials?.password || "", acc.passwordHash),
                );

                if (!account) return user;

                return {
                    id: account.id.toString(),
                    name: account.username,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({
            user,
            account,
            profile,
            email,
            credentials,
        }: {
            user: User;
            account: any;
            profile?: any;
            email?: any;
            credentials?: any;
        }) {
            return true;
        },

        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            // Allow relative URLs
            if (url.startsWith("/")) {
                return `${baseUrl}${url}`;
            }

            // Allow same-origin absolute URLs
            if (new URL(url).origin === baseUrl) {
                return url;
            }

            // Fallback
            return baseUrl;
        },

        async session({ session, user, token }: any) {
            return session;
        },

        async jwt({ token, user, account, profile, isNewUser }: any) {
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
