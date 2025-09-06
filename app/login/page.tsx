'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signIn('google', {
        callbackUrl: '/',
        redirect: false,
      });
      
      if (result?.ok) {
        // Backend call happens automatically in NextAuth JWT callback
        console.log('Google authentication successful, redirecting...');
        router.push('/');
      } else {
        console.error('Google sign-in failed:', result?.error);
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneLogin = () => {
    if (!showPhoneInput) {
      setShowPhoneInput(true);
      return;
    }
    // TODO: Implement phone number authentication
    console.log('Phone login with:', phoneNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="bg-black rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <span className="text-yellow-400 text-2xl font-bold">DG</span>
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">DateGenie</h1>
          <p className="text-black/80 text-lg">Welcome back!</p>
        </div>

        {/* Login Card */}
        <div className="bg-black rounded-2xl shadow-2xl p-8 border-4 border-yellow-400">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-8">
            Sign in to continue
          </h2>

          <div className="space-y-4">
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-300 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 border-2 border-yellow-400 hover:border-yellow-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-yellow-400/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-yellow-400/80">or</span>
              </div>
            </div>

            {/* Mobile Number Login */}
            <div className="space-y-4">
              {showPhoneInput && (
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-yellow-400 text-sm font-medium">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-yellow-400/10 border-2 border-yellow-400/30 rounded-xl px-4 py-3 text-yellow-400 placeholder-yellow-400/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handlePhoneLogin}
                className="w-full bg-transparent hover:bg-yellow-400/10 text-yellow-400 font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 border-2 border-yellow-400 hover:border-yellow-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{showPhoneInput ? 'Send OTP' : 'Continue with Mobile Number'}</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-yellow-400/70 text-sm">
              Welcome to DateGenie
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-6 text-center">
          <p className="text-black/70 text-xs">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-black underline hover:text-black/80">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-black underline hover:text-black/80">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
