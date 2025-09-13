// src/app/admin/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
  
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include',
      });
  
      // Check if server is unreachable
      if (res.status === 0) {
        setErr(
          'Server is not running. Please start the development server with "npm run dev"'
        );
        setLoading(false);
        return;
      }
  
      type ApiResponse = {
        error?: string;
        message?: string;
        token?: string;
      };
      
  
      let data: ApiResponse = {};
      try {
        const text = await res.text();
        if (text) {
          data = JSON.parse(text) as ApiResponse;
        }
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError);
        setErr('Server error - invalid response format');
        setLoading(false);
        return;
      }
  
      if (!res.ok) {
        setErr(data.error || 'Login failed');
        setLoading(false);
        return;
      }
  
      console.log('Login successful');
      // Add a small delay to show success state
      setTimeout(() => {
        router.push('/admin');
      }, 500);
    } catch (error) {
      console.error('Login error:', error);
      setErr('Network error. Please try again.');
      setLoading(false);
    }
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-2xl mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Admin Portal
          </h1>
          <p className="text-lg text-slate-600">
            Secure access to management dashboard
          </p>
         
        </div>

        {/* Login Form */}
        <form onSubmit={onSubmit} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 space-y-6">
          {err && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm font-medium flex items-center space-x-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{err}</span>
            </div>
          )}
          
          {loading && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-2xl text-sm font-medium flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Authenticating...</span>
            </div>
          )}
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Username</label>
            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full h-14 px-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
              placeholder="Enter your username"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full h-14 px-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="flex items-center justify-center space-x-2">
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </form>
        
        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/" 
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-300 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}