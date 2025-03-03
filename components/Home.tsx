import Link from "next/link";
import { ArrowRight, Bookmark, Search, Settings, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              LinkIt
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#preview"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Preview
            </Link>
            <Link
              href="#pricing"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm hover:text-purple-400 transition-colors hidden sm:inline-block"
            >
              Login
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 rounded-md border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-10">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter ">
                  Save & Organize Your Links{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Effortlessly
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto ">
                  The modern way to collect, organize, and access your favorite
                  websites in one beautiful space.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_0.8s_ease-in-out_0.4s_forwards]">
                <Link href="/signup">
                  <button className="px-8 py-6 text-lg rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <button className="px-8 py-6 text-lg rounded-md border border-white/20 hover:bg-white/5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Powerful Features
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bookmark className="h-10 w-10 text-blue-400" />,
                  title: "Save Instantly",
                  description:
                    "Save links with a single click from any device or browser extension.",
                },
                {
                  icon: <Search className="h-10 w-10 text-purple-400" />,
                  title: "Search & Filter",
                  description:
                    "Find any saved link in seconds with powerful search and filtering.",
                },
                {
                  icon: <Share2 className="h-10 w-10 text-blue-400" />,
                  title: "Share Collections",
                  description:
                    "Create and share curated collections of links with your team or friends.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative group p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 ity-0 opacgroup-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="relative space-y-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  See Your Links in Action
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A beautiful, intuitive interface to manage all your important
                links.
              </p>
            </div>

            <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">My Links</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    placeholder="Search links..."
                    className="pl-10 bg-white/5 border border-white/10 focus:border-purple-500 rounded-md py-2 w-64 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Next.js Documentation",
                    url: "https://nextjs.org/docs",
                    icon: "/placeholder.svg?height=20&width=20",
                    color: "from-blue-500/20 to-blue-600/20",
                  },
                  {
                    title: "Tailwind CSS Framework",
                    url: "https://tailwindcss.com",
                    icon: "/placeholder.svg?height=20&width=20",
                    color: "from-teal-500/20 to-teal-600/20",
                  },
                  {
                    title: "React Official Website",
                    url: "https://reactjs.org",
                    icon: "/placeholder.svg?height=20&width=20",
                    color: "from-cyan-500/20 to-cyan-600/20",
                  },
                  {
                    title: "Vercel Deployment Platform",
                    url: "https://vercel.com",
                    icon: "/placeholder.svg?height=20&width=20",
                    color: "from-purple-500/20 to-purple-600/20",
                  },
                ].map((link, index) => (
                  <div
                    key={index}
                    className={`group p-4 rounded-lg bg-gradient-to-r ${link.color} border border-white/10 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0">
                        <img
                          src={link.icon || "/placeholder.svg"}
                          alt=""
                          className="w-5 h-5"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">
                          {link.title}
                        </h4>
                        <p className="text-sm text-gray-400 truncate">
                          {link.url}
                        </p>
                      </div>
                      <div className=" group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-full hover:bg-white/10">
                          <Settings className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/signup">
                  <button className="px-4 py-2 rounded-md border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors">
                    View All Links
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to organize your digital life?
              </h2>
              <p className="text-xl text-gray-400">
                Join thousands of users who save and organize their links with
                LinkIt.
              </p>
              <Link href="/signup">
                <button className="px-8 py-6 text-lg rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 flex items-center mx-auto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bookmark className="h-5 w-5 text-purple-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                LinkIt
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              © {new Date().getFullYear()} LinkIt. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
