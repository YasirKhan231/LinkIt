import Link from "next/link";
import { ArrowLeft, Bookmark } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="container mx-auto px-4 flex h-16 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Bookmark className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              LinkIt
            </span>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">
            Create your account
          </h1>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-400">
                Password must be at least 8 characters long
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-colors"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-400 hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LinkIt. All rights reserved.
      </footer>
    </div>
  );
}
