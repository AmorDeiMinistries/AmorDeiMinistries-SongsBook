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
  <div className="relative w-full">
    {/* Crystal search field */}
    <div
      className="
        group relative
        flex min-h-[58px] items-center
        gap-3

        overflow-hidden
        rounded-[18px]

        border border-[#243451]/[0.10]
        bg-white/70

        px-4

        shadow-[0_10px_30px_rgba(40,55,90,0.055),inset_0_1px_0_rgba(255,255,255,0.95)]

        backdrop-blur-xl

        transition-[border-color,box-shadow,background-color]
        duration-300

        focus-within:border-blue-400/50
        focus-within:bg-white/90
        focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.07),0_14px_38px_rgba(40,55,90,0.08),inset_0_1px_0_rgba(255,255,255,1)]

        sm:min-h-[64px]
        sm:gap-4
        sm:px-5

        dark:border-white/[0.12]
        dark:bg-white/[0.055]
        dark:shadow-[0_12px_32px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.07)]

        dark:focus-within:border-cyan-300/40
        dark:focus-within:bg-white/[0.075]
        dark:focus-within:shadow-[0_0_0_4px_rgba(103,232,249,0.055),0_16px_40px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.09)]

        motion-reduce:transition-none
      "
    >
      {/* Subtle crystal surface */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-[1px]
          rounded-[17px]

          bg-[linear-gradient(135deg,rgba(255,255,255,0.70),transparent_42%,rgba(103,120,255,0.018))]

          dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_42%,rgba(103,232,249,0.018))]
        "
      />

      {/* Top glass highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-5 right-5 top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent

          dark:via-white/25
        "
      />

      {/* Very restrained blue refraction */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-10 top-1/2

          h-24 w-24
          -translate-y-1/2
          rounded-full

          bg-blue-400/[0.055]
          blur-[35px]

          transition-opacity duration-300
          group-focus-within:opacity-100

          dark:bg-cyan-300/[0.045]

          motion-reduce:transition-none
        "
      />

      {/* Search icon */}
      <div
        className="
          relative z-10
          flex h-9 w-9
          shrink-0 items-center justify-center

          rounded-[11px]

          border border-blue-200/70
          bg-blue-50/65

          text-[#3563C7]

          shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

          transition-[border-color,color,background-color,box-shadow]
          duration-300

          group-focus-within:border-blue-300
          group-focus-within:bg-blue-50
          group-focus-within:text-blue-600
          group-focus-within:shadow-[0_5px_15px_rgba(59,130,246,0.10)]

          dark:border-cyan-300/15
          dark:bg-cyan-300/[0.055]
          dark:text-cyan-300

          dark:group-focus-within:border-cyan-300/30
          dark:group-focus-within:bg-cyan-300/[0.08]

          motion-reduce:transition-none
        "
      >
        <Search
          aria-hidden="true"
          size={16}
          strokeWidth={1.8}
        />
      </div>

      {/* Search functionality remains exactly the same */}
      <input
        type="text"
        placeholder="Search title..."
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
        className="
          relative z-10

          h-full min-w-0 flex-1

          bg-transparent

          py-4

          text-[14px] font-medium
          text-[#202735]

          outline-none

          placeholder:font-normal
          placeholder:text-[#667085]/55

          sm:text-[15px]

          dark:text-[#F1F4F8]
          dark:placeholder:text-white/35
        "
      />

      {/* Small visual keyboard hint — desktop only */}
      {!search && (
        <div
          aria-hidden="true"
          className="
            relative z-10
            hidden shrink-0

            rounded-[8px]

            border border-[#243451]/[0.08]
            bg-white/55

            px-2 py-1

            text-[8px] font-semibold uppercase
            tracking-[0.12em]

            text-[#475467]/45

            shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

            sm:block

            dark:border-white/[0.08]
            dark:bg-white/[0.04]
            dark:text-white/30
          "
        >
          Type to search
        </div>
      )}
    </div>

    {/* Search results */}
    {search && !isAdminTrigger && (
  <div
    className="
      relative
      z-30

      mt-3
      max-h-[320px]
      overflow-y-auto
      overscroll-contain

      rounded-[20px]

      border border-[#243451]/[0.09]
      bg-white/85

      p-1.5

      shadow-[0_18px_45px_rgba(35,45,70,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]

      backdrop-blur-[28px]

      dark:border-white/[0.11]
      dark:bg-white/[0.05]
      dark:shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]
    "
  >
        {results.length === 0 && (
          <div
            className="
              px-5 py-9
              text-center
            "
          >
            <div
              className="
                mx-auto mb-3
                flex h-9 w-9
                items-center justify-center

                rounded-full

                border border-[#243451]/[0.08]
                bg-[#F7F9FD]

                text-[#667085]/50

                dark:border-white/[0.08]
                dark:bg-white/[0.04]
                dark:text-white/35
              "
            >
              <Search
                aria-hidden="true"
                size={15}
                strokeWidth={1.7}
              />
            </div>

            <p
              className="
                text-[13px] font-medium
                text-[#344054]/65

                dark:text-white/55
              "
            >
              No hymns found
            </p>

            <p
              className="
                mt-1
                text-[11px]
                text-[#667085]/45

                dark:text-white/30
              "
            >
              Try another title, number, or lyric.
            </p>
          </div>
        )}

        {results.map((song, index) => (
          <Link
            key={song.id}
            href={`/song/${song.slug}`}
            className="
              group/result
              relative

              flex items-center
              justify-between
              gap-4

              rounded-[15px]

              px-4 py-3.5

              transition-[background-color,transform]
              duration-200

              hover:bg-blue-50/75

              focus-visible:bg-blue-50
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-inset
              focus-visible:ring-blue-400/50

              dark:hover:bg-white/[0.065]
              dark:focus-visible:bg-white/[0.07]
              dark:focus-visible:ring-cyan-300/40

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              {/* Result number */}
              <div
                className="
                  flex h-8 w-8
                  shrink-0 items-center justify-center

                  rounded-[10px]

                  border border-[#243451]/[0.07]
                  bg-white/60

                  text-[9px] font-semibold
                  tabular-nums

                  text-[#667085]/50

                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

                  dark:border-white/[0.08]
                  dark:bg-white/[0.04]
                  dark:text-white/35
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <span
                className="
                  truncate

                  text-[13px] font-medium
                  text-[#202735]

                  transition-colors
                  duration-200

                  group-hover/result:text-[#2859C5]

                  sm:text-[14px]

                  dark:text-[#ECEFF5]
                  dark:group-hover/result:text-cyan-300

                  motion-reduce:transition-none
                "
              >
                {song.title}
              </span>
            </div>

            {/* Tiny crystal marker */}
            <span
              aria-hidden="true"
              className="
                h-1.5 w-1.5
                shrink-0 rotate-45

                bg-[#C69235]/45

                transition-[background-color,box-shadow,transform]
                duration-200

                group-hover/result:rotate-[135deg]
                group-hover/result:bg-[#C69235]
                group-hover/result:shadow-[0_0_8px_rgba(198,146,53,0.35)]

                dark:bg-[#F6D77A]/40
                dark:group-hover/result:bg-[#F6D77A]
                dark:group-hover/result:shadow-[0_0_9px_rgba(246,215,122,0.4)]

                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            />
          </Link>
        ))}
      </div>
    )}
  </div>
)
}