"use client"

import { useEffect, useState } from "react"
import { Search, Edit2, Trash2, X, Music, CheckCircle, AlertCircle } from "lucide-react"
import {
  fetchSongs,
  deleteSong,
  updateSong,
  type Song,
} from "@/lib/api"


export default function ManageSongsPage() {
  const [songs, setSongs] = useState<Song[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [editingSong, setEditingSong] = useState<Song | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editLyrics, setEditLyrics] = useState("")
  const [message, setMessage] = useState("")

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .replace(/aa/g, "a")
      .replace(/ee/g, "e")
      .replace(/oo/g, "o")
      .replace(/-/g, "")
      .replace(/\s+/g, "")

  const filteredSongs = songs.filter((song) =>
    normalizeText(song.title).includes(normalizeText(searchTerm)) ||
    normalizeText(song.slug).includes(normalizeText(searchTerm))
  )

  const loadSongs = async () => {
 try {
  const data = await fetchSongs()
  setSongs(data)
} catch (error) {
  setMessage("Error: Failed to fetch songs")
}
  }

  useEffect(() => {
    loadSongs()
  }, [])

const handleDelete = async (id: number) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this song?"
  )

  if (!confirmDelete) return

  try {
    await deleteSong(id)
    // Remove from local state immediately instead of refetching
    setSongs((prev) => prev.filter((song) => song.id !== id))
    setMessage("Success: Song deleted successfully")
  } catch (error) {
    setMessage("Error: Failed to delete song")
  }
}

  const handleEdit = (song: Song) => {
    setEditingSong(song)
    setEditTitle(song.title)
    setEditLyrics(song.lyrics)
    setMessage("")
  }

  const handleUpdate = async () => {
  if (!editingSong) return

  try {
    await updateSong(editingSong.id, {
      title: editTitle,
      lyrics: editLyrics,
    })

    // Update local state directly instead of refetching
    setSongs((prev) =>
      prev.map((song) =>
        song.id === editingSong.id
          ? { ...song, title: editTitle, lyrics: editLyrics }
          : song
      )
    )

    setMessage("Success: Song updated successfully")
    setEditingSong(null)
    setEditTitle("")
    setEditLyrics("")
  } catch (error) {
    setMessage("Error: Failed to update song")
  }
}

  return (
    <main className="min-h-screen bg-slate-50/50 p-6 md:p-12 lg:p-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Manage <span className="text-indigo-600">Library</span>
            </h1>
            <p className="text-slate-500 mt-2">
              Browse, update, or remove songs from your collection.
            </p>
          </div>
          
          <div className="text-sm font-medium text-slate-400">
            {filteredSongs.length} {filteredSongs.length === 1 ? 'song' : 'songs'} found
          </div>
        </div>

        {/* Feedback Message */}
        {message && (
          <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 border ${
            message.includes("Error") 
              ? "bg-red-50 border-red-100 text-red-700" 
              : "bg-emerald-50 border-emerald-100 text-emerald-700"
          }`}>
            {message.includes("Error") ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
            <span className="text-sm font-medium">{message}</span>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative mb-8 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search by song title or slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-lg"
          />
        </div>

        {/* SONG LIST */}
        <div className="grid gap-4">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center transition-all hover:shadow-md hover:border-indigo-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <Music size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-800 text-lg group-hover:text-indigo-900 transition-colors">
                    {song.title}
                  </h2>
                  <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 py-0.5 bg-slate-100 rounded">
                    {song.category}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(song)}
                  className="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                  title="Edit Song"
                >
                  <Edit2 size={20} />
                </button>

                <button
                  onClick={() => handleDelete(song.id)}
                  className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                  title="Delete Song"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {filteredSongs.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <p className="text-slate-500 font-medium">No songs match your search criteria.</p>
            </div>
          )}
        </div>

        {/* SINGLE EDIT MODAL */}
        {editingSong && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
              onClick={() => setEditingSong(null)}
            />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Edit Song</h2>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Modifying: {editingSong.title}</p>
                </div>
                <button 
                  onClick={() => setEditingSong(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 overflow-y-auto">
                <label className="block text-sm font-bold text-slate-700 mb-2">Song Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-4 mb-6 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Enter song title..."
                />

                <label className="block text-sm font-bold text-slate-700 mb-2">Lyrics</label>
                <textarea
                  value={editLyrics}
                  onChange={(e) => setEditLyrics(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-4 h-64 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-serif leading-relaxed"
                  placeholder="Paste lyrics here..."
                />
              </div>

              <div className="px-8 py-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button
                  onClick={() => setEditingSong(null)}
                  className="px-6 py-2.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}