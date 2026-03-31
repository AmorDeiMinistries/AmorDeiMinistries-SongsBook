"use client";

import Link from "next/link";
import { PlusCircle, Music, LayoutGrid, ArrowRight, LogOut } from "lucide-react";
import { logoutAdmin } from "@/lib/api"

export default function AdminDashboard() {
 const handleLogout = async () => {
  await logoutAdmin()
  window.location.href = "/admin/login"
}

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Navigation Row */}
        <div className="flex justify-between items-start mb-12">
          <header className="text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100">
              Amor Dei Ministries
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Admin <span className="text-indigo-600">Portal</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Welcome to our digital hymnal management system. Update and keep the ministry's music library up to date.
            </p>
          </header>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-sm shadow-sm hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all duration-300 active:scale-95"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

        <hr className="mb-12 border-slate-200/60" />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Add New Song Card */}
          <Link href="/admin/add" className="group">
            <div className="h-full bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 group-hover:border-indigo-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 text-indigo-900">
                <PlusCircle size={120} />
              </div>
              <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-500">
                <PlusCircle className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Add New Song</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Create and publish a new song to the digital songbook.
              </p>
              <div className="flex items-center text-indigo-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                Get started <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </Link>

          {/* Manage Songs Card */}
          <Link href="/admin/edit" className="group">
            <div className="h-full bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 group-hover:border-slate-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 text-slate-900">
                <Music size={120} />
              </div>
              <div className="bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-500">
                <Music className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Manage Library</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Edit titles, update lyrics, or remove outdated entries.
              </p>
              <div className="flex items-center text-slate-800 font-bold text-sm group-hover:translate-x-2 transition-transform">
                View all songs <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </Link>

          {/* Manage Categories Card */}
          <Link href="/admin/categories" className="group">
            <div className="h-full bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 group-hover:border-indigo-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 text-indigo-900">
                <LayoutGrid size={120} />
              </div>
              <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <LayoutGrid className="text-indigo-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Themes</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Organize songs by genre, service type, or theme.
              </p>
              <div className="flex items-center text-indigo-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                Configure <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </Link>

        </div>

        {/* Footer Note */}
        <footer className="mt-24 text-center border-t border-slate-200 pt-8">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
            &copy; {new Date().getFullYear()} Amor Dei Ministries • Song Management System
          </p>
        </footer>
      </div>
    </main>
  );
}