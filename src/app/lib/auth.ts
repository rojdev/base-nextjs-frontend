import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Laravel',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch('https://your-laravel-api.com/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        })

        const data = await res.json()

        if (!res.ok || !data.token) throw new Error(data.message || 'Login failed')

        return {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          token: data.token,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
        token.laravelToken = user.token
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      session.laravelToken = token.laravelToken
      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
})
