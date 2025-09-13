import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aided School Teachers' Society Thodupuzha",
  description: "Official website of the Aided School Teachers' Co-operative Society Thodupuzha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-24 flex items-center justify-between">
              <Link href="/" className="group flex items-center space-x-6 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Image 
                    src="/image/Logo.png" 
                    alt="Society Logo" 
                    width={72} 
                    height={72} 
                    className="relative h-18 w-18 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-3" 
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="hidden lg:block">
                  <h1 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    Thodupuzha Taluk Aided School Teachers
                  </h1>
                  <p className="text-sm text-slate-600 font-medium group-hover:text-slate-700 transition-colors duration-300">
                    Co-Operative Society Ltd. No. I-145
                  </p>
                </div>
              </Link>
              
              <nav className="hidden lg:flex items-center space-x-10">
                <a href="#about" className="relative text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-2">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></span>
                </a>
                <a href="#services" className="relative text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-2">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></span>
                </a>
                <a href="#staff" className="relative text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-2">
                  Our Staff
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></span>
                </a>
                <a href="#contact" className="relative text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 group py-2">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></span>
                </a>
              </nav>
              
              <MobileNav />
            </div>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
                    <Image src="/image/Logo.png" alt="Society Logo" width={56} height={56} className="relative h-14 w-14 rounded-2xl shadow-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Teachers Society</h3>
                    <p className="text-slate-400 text-sm font-medium">Thodupuzha</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Empowering educators through cooperative services and financial support for over three decades.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Quick Links</h4>
                <div className="space-y-3">
                  <a href="#about" className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                    <span className="group-hover:text-blue-400">About Us</span>
                  </a>
                  <a href="#services" className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                    <span className="group-hover:text-blue-400">Our Services</span>
                  </a>
                  <a href="#staff" className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                    <span className="group-hover:text-blue-400">Our Team</span>
                  </a>
                  <a href="#contact" className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                    <span className="group-hover:text-blue-400">Contact</span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Contact Info</h4>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>Thodupuzha, Kerala</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+91 1234567890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>info@teachersociety.org</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Aided School Teachers' Co-operative Society Thodupuzha. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm mt-2 md:mt-0 flex items-center space-x-2">
                <span>Built with</span>
                <span className="text-red-500">♥</span>
                <span>using Next.js & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
