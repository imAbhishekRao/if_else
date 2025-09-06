# DateGenie

DateGenie is a modern dating application built with Next.js, featuring Google OAuth authentication and a beautiful yellow-black theme.

## Features

- 🔐 Google OAuth Authentication
- 📱 Mobile Number Login (Coming Soon)
- 🎨 Beautiful Yellow & Black Theme
- 📱 Responsive Design
- ⚡ Built with Next.js 15 and TypeScript

## Google OAuth Setup

Before running the application, you need to set up Google OAuth:

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google+ API**
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it

3. **Create OAuth Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)

4. **Create Environment Variables**
   - Create a `.env.local` file in the root directory
   - Add the following variables:
   ```bash
   GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_random_secret_key_here
   ```
   - Generate a random secret for `NEXTAUTH_SECRET`: `openssl rand -base64 32`

## Getting Started

First, install dependencies and set up environment variables as described above.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
