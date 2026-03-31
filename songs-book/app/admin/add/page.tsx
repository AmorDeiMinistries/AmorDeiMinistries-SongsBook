"use client"

import { useEffect, useState } from "react"
import { Music, Globe, Type, ListTree, Send, CheckCircle, AlertCircle } from "lucide-react"

interface Category {
  id: number
  name: string
}

export default function AddSongPage() {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [lyrics, setLyrics] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [message, setMessage] = useState("")
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/categories")
        const data = await res.json()
        setCategories(data)
      } catch (error) {
        setMessage("Error: Failed to fetch categories")
      }
    }

    fetchCategories()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")

    try {
      const newSong = {
        title,
        slug,
        category: selectedCategory || "",
        lyrics,
      }

      const res = await fetch("http://localhost:3000/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSong),
      })

      if (!res.ok) {
        throw new Error("Failed to add song")
      }

      setMessage("Success: Song Added Successfully")
      setTitle("")
      setSlug("")
      setLyrics("")
      setSelectedCategory(null)
    } catch (error) {
      setMessage("Error: Error Adding Song")
    }
  }

  return (
    <main className="min-h-screen bg-slate-50/50 p-6 md:p-12 lg:p-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-200 mb-6">
            <Music className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Add <span className="text-indigo-600">New Song</span>
          </h1>
          <p className="text-slate-500 mt-2">Expand the Amor Dei song library with new lyrics and categories.</p>
        </header>

        {/* Feedback Message */}
        {message && (
          <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 border animate-in fade-in zoom-in duration-300 ${
            message.includes("Error") 
              ? "bg-red-50 border-red-100 text-red-700" 
              : "bg-emerald-50 border-emerald-100 text-emerald-700"
          }`}>
            {message.includes("Error") ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
            <span className="text-sm font-bold">{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-slate-200 p-8 md:p-10 rounded-[2.5rem] shadow-sm">
          
          {/* Title Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Type size={16} className="text-indigo-500" /> Song Title 
            </label>
            <input
              type="text"
              placeholder="enter song title in Telugu"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-lg font-medium"
              required
            />
          </div>

          {/* Slug Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Globe size={16} className="text-indigo-500" /> Slug
            </label>
            <input
              type="text"
              placeholder="Slugs should be lowercase and hyphenated (xxx-yyy-zzz)."
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono text-sm"
              required
            />
          </div>

          {/* Category Selection */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <ListTree size={16} className="text-indigo-500" /> Select Theme (Optional)
            </label>
            <div className="flex flex-wrap gap-2 bg-slate-50 p-5 rounded-3xl border border-slate-100 max-h-48 overflow-y-auto">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat.name ? null : cat.name)
                  }
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    selectedCategory === cat.name
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
              {categories.length === 0 && !message.includes("Error") && (
                <p className="text-slate-400 text-xs italic">Loading categories...</p>
              )}
            </div>
          </div>

          {/* Lyrics Textarea */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Type size={16} className="text-indigo-500" /> Song Lyrics
            </label>
            <textarea
              placeholder="Paste lyrics here..."
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-5 py-4 h-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-serif leading-relaxed text-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-[0.98]"
          >
            <Send size={20} />
            Publish Song
          </button>
        </form>

       
      </div>
    </main>
  )
}