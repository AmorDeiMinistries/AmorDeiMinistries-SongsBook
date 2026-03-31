"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, User, ShieldCheck, AlertCircle } from "lucide-react"
import { loginAdmin } from "@/lib/api"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  setMessage("")

  try {
    await loginAdmin(username, password)

    router.push("/admin")
    router.refresh()
  } catch (error) {
    setMessage(
      error instanceof Error
        ? error.message
        : "Login failed. Please check your connection."
    )
  }
}

  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-slate-200 px-6">
      <div className="w-full max-w-md">
        
        {/* Ministry Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-200 mb-4">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Admin <span className="text-indigo-600">Login</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-bold">
            Amor Dei Ministries
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50">
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-wider">Username</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="admin_user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-wider">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-slate-200 transition-all duration-300 active:scale-[0.98] mt-4"
            >
              Sign In to Dashboard
            </button>
          </form>

          {/* Error Message */}
          {message && (
            <div className="mt-6 flex items-center justify-center gap-2 text-red-500 bg-red-50 py-3 rounded-xl border border-red-100 animate-in fade-in slide-in-from-bottom-2">
              <AlertCircle size={16} />
              <p className="text-sm font-semibold italic">{message}</p>
            </div>
          )}
        </div>

        {/* Help Link */}
        <p className="mt-8 text-center text-slate-400 text-xs">
          Forgot credentials? Contact the system administrator.
        </p>
      </div>
    </main>
  )
}