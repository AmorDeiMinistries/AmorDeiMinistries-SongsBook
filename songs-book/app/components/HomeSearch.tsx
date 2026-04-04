"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import Fuse from "fuse.js"
import { transliterate, phoneticKey } from "@/lib/transliterate"
import { useRouter } from "next/navigation"

interface Song {
  id: number
  title: string
  slug: string
  category: string
  lyrics: string
}

export default function HomeSearch({ songs }: { songs: Song[] }) {
  const [search, setSearch] = useState("")
const router = useRouter()

const isAdminTrigger =
  search.trim().toLowerCase() === "amor_dei_ministries"
  
  const fuse = useMemo(() => {
    return new Fuse(
      songs.map((s) => ({
        ...s,
        tE: transliterate(s.title),
        pE: phoneticKey(transliterate(s.title)),
        cE: transliterate(s.category)
      })),
      {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "tE", weight: 0.3 },
          { name: "pE", weight: 0.2 },
          { name: "slug", weight: 0.05 },
          { name: "category", weight: 0.03 },
          { name: "cE", weight: 0.02 }
        ],
        threshold: 0.4,
        ignoreLocation: true
      }
    )
  }, [songs])

  const results = useMemo(() => {
    if (!search.trim()) return []
    return fuse.search(search).map(r => r.item)
  }, [search, fuse])

  return (
    <div className="max-w-2xl mx-auto -mt-20 mb-28 relative">
      <div className="relative flex items-center gap-4 px-8 py-5 rounded-[40px]
        bg-gradient-to-b from-white to-slate-100 dark:from-zinc-900 dark:to-zinc-800
        border border-white/70
        shadow-[0_25px_70px_rgba(0,0,0,0.18),inset_0_2px_3px_rgba(255,255,255,0.8)]
        focus-within:shadow-[0_30px_90px_rgba(0,0,0,0.25)]
        transition">
        <div className="absolute inset-x-4 top-[2px] h-[2px] bg-white/90 blur-sm rounded-full"/>
        <Search className="text-slate-400"/>
        <input
  type="text"
  placeholder="Search songs..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (
      e.key === "Enter" &&
      search.trim().toLowerCase() === "amor_dei_ministries"
    ) {
      router.push("/admin/login")
    }
  }}
  className="w-full bg-transparent outline-none text-[16px]"
/>
      </div>

      {search && !isAdminTrigger && (
        <div className="absolute z-50 w-full mt-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-white/60 shadow-[0_30px_60px_rgba(0,0,0,0.2)] max-h-[400px] overflow-y-auto">
          {results.length === 0 && (
            <div className="p-10 text-center text-sm opacity-40">No songs found</div>
          )}
          {results.map((song) => (
            <Link
              key={song.id}
              href={`/song/${song.slug}`}
              className="block px-6 py-4 hover:bg-blue-50 dark:hover:bg-zinc-800 transition"
            >
              {song.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}