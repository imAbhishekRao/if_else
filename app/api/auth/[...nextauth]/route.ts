import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile"
        }
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      if (account && account.id_token) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
        console.log('Google ID Token received:', token.idToken)
        
        // Automatically send token to backend
        try {
          console.log('Sending token to backend automatically...')
          const response = await fetch('http://192.168.29.58:8000/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idToken: token.idToken
            }),
          })
          
          if (response.ok) {
            const backendResponse = await response.json()
            if (backendResponse.user['verified']){
              
            }
          } else {
            console.error('Backend authentication failed:', response.status, response.statusText)
          }
        } catch (error) {
          console.error('Error sending token to backend:', error)
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.accessToken = token.accessToken as string
        session.idToken = token.idToken as string
      }
      return session
    },
  },
  debug: true, // Enable debug mode to see more detailed logs
})

export { handler as GET, handler as POST }
