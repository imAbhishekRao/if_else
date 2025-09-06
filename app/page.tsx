import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
          {/* Logo Section */}
          <div className="text-center">
            <div className="bg-black rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-yellow-400 text-3xl font-bold">DG</span>
            </div>
            <h1 className="text-5xl font-bold text-black mb-4">DateGenie</h1>
            <p className="text-xl text-black/80 max-w-md">
              Your perfect date awaits. Connect with like-minded people and discover amazing experiences together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
            <Link
              href="/login"
              className="rounded-full bg-black text-yellow-400 border-2 border-black hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-200 font-semibold text-lg h-14 px-8 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-black text-black hover:bg-black hover:text-yellow-400 transition-all duration-200 font-semibold text-lg h-14 px-8 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
            >
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-black/20">
              <div className="bg-black rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-400 text-xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Perfect Matches</h3>
              <p className="text-black/70">Find people who share your interests and values</p>
            </div>
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-black/20">
              <div className="bg-black rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-400 text-xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Amazing Dates</h3>
              <p className="text-black/70">Discover unique and exciting date ideas</p>
            </div>
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-black/20">
              <div className="bg-black rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-400 text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Safe & Secure</h3>
              <p className="text-black/70">Your privacy and safety are our top priority</p>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Link
            href="/privacy"
            className="text-black/70 hover:text-black text-sm hover:underline hover:underline-offset-4 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-black/70 hover:text-black text-sm hover:underline hover:underline-offset-4 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="text-black/70 hover:text-black text-sm hover:underline hover:underline-offset-4 transition-colors"
          >
            Contact Us
          </Link>
        </footer>
      </div>
    </div>
  );
}
