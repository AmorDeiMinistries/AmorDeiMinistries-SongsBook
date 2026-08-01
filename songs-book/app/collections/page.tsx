"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bookmark,
  ChevronRight,
  Heart,
  Music2,
  Sparkles,
} from "lucide-react"

interface Song {
  id: number
  title: string
  slug: string
  category: string
  lyrics: string
}

export default function CollectionsPage() {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)

  /* ============================================================
     EXISTING COLLECTION LOGIC
     Kept intact — saved slugs are loaded from localStorage.
  ============================================================ */
  const loadCollection = async () => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("myCollection") || "[]"
    )

    if (stored.length === 0) {
      setSongs([])
      setLoading(false)
      return
    }

    const fetched = await Promise.all(
      stored.map((slug) =>
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/songs/slug/${slug}`)
          .then((res) => res.json())
          .catch(() => null)
      )
    )

    setSongs(fetched.filter(Boolean))
    setLoading(false)
  }

  useEffect(() => {
    loadCollection()

    window.addEventListener("focus", loadCollection)

    return () => {
      window.removeEventListener("focus", loadCollection)
    }
  }, [])

  return (
    <main
      className="
        relative min-h-screen overflow-x-hidden
        bg-[#F7F9FD]
        text-[#202735]

        dark:bg-[#090C13]
        dark:text-[#F1F3F7]
      "
    >
      {/* ============================================================
          CRYSTAL LIGHTING ENVIRONMENT
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          overflow-hidden
        "
      >
        {/* Sapphire light */}
        <div
          className="
            absolute
            -left-[250px] -top-[210px]

            h-[620px] w-[620px]
            rounded-full

            bg-blue-400/[0.18]
            blur-[150px]

            sm:h-[780px]
            sm:w-[780px]

            dark:bg-cyan-400/[0.055]
          "
        />

        {/* Violet refraction */}
        <div
          className="
            absolute
            -right-[270px] top-[18%]

            h-[560px] w-[560px]
            rounded-full

            bg-violet-400/[0.13]
            blur-[155px]

            dark:bg-violet-500/[0.055]
          "
        />

        {/* Soft champagne light */}
        <div
          className="
            absolute
            bottom-[-170px] left-[20%]

            h-[500px] w-[500px]
            rounded-full

            bg-amber-300/[0.075]
            blur-[150px]

            dark:bg-amber-300/[0.018]
          "
        />

        {/* Fine crystal grid */}
        <div
          className="
            absolute inset-0

            opacity-[0.20]

            [background-image:linear-gradient(to_right,rgba(65,82,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(65,82,120,0.04)_1px,transparent_1px)]
            [background-size:52px_52px]

            [mask-image:linear-gradient(to_bottom,black,transparent_85%)]

            dark:opacity-[0.07]
          "
        />

        {/* Center illumination */}
        <div
          className="
            absolute
            left-1/2 top-[60px]

            h-[520px] w-[90%]
            -translate-x-1/2

            rounded-full

            bg-white/55
            blur-[125px]

            dark:bg-white/[0.012]
          "
        />
      </div>

      {/* ============================================================
          PAGE CONTENT
      ============================================================ */}
      <div
        className="
          relative z-10
          mx-auto
          w-full max-w-5xl

          px-4
          pb-20 pt-4

          sm:px-6
          sm:pb-24
          sm:pt-6

          lg:px-8
        "
      >
        {/* ==========================================================
            BACK BUTTON
        ========================================================== */}
        <nav
          aria-label="Page navigation"
          className="mb-4 sm:mb-5"
        >
          <Link
            href="/"
            className="
              group

              inline-flex items-center gap-2

              rounded-full

              border border-white/90
              bg-white/50

              px-3.5 py-2

              text-[8px] font-bold uppercase
              tracking-[0.20em]

              text-[#526077]/60

              shadow-[0_7px_22px_rgba(40,55,90,0.045),inset_0_1px_0_rgba(255,255,255,1)]

              backdrop-blur-xl

              transition-all duration-300

              hover:-translate-y-0.5
              hover:border-blue-300/50
              hover:bg-white/85
              hover:text-blue-600

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F7F9FD]

              dark:border-white/[0.08]
              dark:bg-white/[0.03]
              dark:text-white/42

              dark:hover:border-cyan-300/20
              dark:hover:bg-white/[0.05]
              dark:hover:text-cyan-200

              dark:focus-visible:ring-cyan-300/45
              dark:focus-visible:ring-offset-[#090C13]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            <ArrowLeft
              size={12}
              strokeWidth={1.8}
              className="
                transition-transform duration-300
                group-hover:-translate-x-0.5

                motion-reduce:transform-none
              "
            />

            Home
          </Link>
        </nav>

        {/* ==========================================================
            CHOSEN HYMNS CRYSTAL HERO
        ========================================================== */}
        <header
          className="
            relative isolate
            overflow-hidden

            rounded-[28px]

            border border-white/90
            bg-white/48

            px-5 py-8

            shadow-[0_28px_70px_rgba(38,54,90,0.09),0_8px_20px_rgba(38,54,90,0.04),inset_0_2px_1px_rgba(255,255,255,1)]

            backdrop-blur-[32px]

            sm:rounded-[34px]
            sm:px-8
            sm:py-10

            dark:border-white/[0.10]
            dark:bg-white/[0.035]

            dark:shadow-[0_30px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)]
          "
        >
          {/* Polished crystal face */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-[1px] -z-10

              rounded-[27px]

              bg-[linear-gradient(135deg,rgba(255,255,255,0.90),rgba(255,255,255,0.13)_34%,transparent_59%,rgba(91,113,255,0.025))]

              sm:rounded-[33px]

              dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_34%,transparent_59%,rgba(103,232,249,0.012))]
            "
          />

          {/* Blue internal light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -left-16 -top-20 -z-10

              h-56 w-56
              rounded-full

              bg-blue-300/[0.18]
              blur-[75px]

              dark:bg-cyan-300/[0.055]
            "
          />

          {/* Violet internal light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -bottom-24 -right-14 -z-10

              h-64 w-64
              rounded-full

              bg-violet-300/[0.14]
              blur-[80px]

              dark:bg-violet-400/[0.05]
            "
          />

          {/* Champagne center reflection */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              bottom-[-105px] left-1/2 -z-10

              h-44 w-72
              -translate-x-1/2

              rounded-full

              bg-amber-200/[0.10]
              blur-[70px]

              dark:bg-amber-300/[0.025]
            "
          />

          {/* Upper specular highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              left-[12%] right-[12%] top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent

              dark:via-white/25
            "
          />

          {/* ======================================================
              DYNAMIC SAVED SONG COUNT
          ====================================================== */}
          {!loading && (
            <div
              className="
                absolute
                right-4 top-4

                flex items-center gap-2

                select-none

                sm:right-6
                sm:top-5
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-[7px] w-[7px]
                  rotate-45

                  border border-[#66789A]/25

                  bg-gradient-to-br
                  from-blue-300/25
                  via-white/60
                  to-violet-300/25

                  shadow-[0_0_9px_rgba(80,110,180,0.09)]

                  dark:border-white/15
                  dark:from-cyan-300/10
                  dark:via-white/10
                  dark:to-violet-300/10
                "
              />

              <span
                className="
                  text-[15px] font-light
                  tabular-nums

                  text-[#536078]/43

                  dark:text-white/30
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {songs.length}
              </span>

              <span
                className="
                  text-[5px] font-bold uppercase
                  tracking-[0.23em]

                  text-[#667085]/30

                  dark:text-white/18
                "
              >
                Saved
              </span>
            </div>
          )}

          {/* ======================================================
              HERO CONTENT
          ====================================================== */}
          <div className="relative z-10 text-center">
            {/* 3D bookmark emblem */}
            <div
              className="
                relative

                mx-auto mb-5

                flex h-[60px] w-[60px]
                items-center justify-center
              "
            >
              {/* Rear depth */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-[7px]

                  translate-x-[4px]
                  translate-y-[5px]
                  rotate-45

                  rounded-[12px]

                  bg-[#64789F]/10

                  dark:bg-black/35
                "
              />

              {/* Crystal diamond */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-[6px]

                  rotate-45

                  rounded-[12px]

                  border border-white

                  bg-gradient-to-br
                  from-white
                  via-blue-50/70
                  to-violet-100/45

                  shadow-[0_8px_18px_rgba(50,75,130,0.13),inset_1px_1px_1px_rgba(255,255,255,1)]

                  dark:border-white/[0.10]

                  dark:bg-gradient-to-br
                  dark:from-white/[0.07]
                  dark:via-cyan-300/[0.025]
                  dark:to-violet-300/[0.035]
                "
              />

              <Bookmark
                size={18}
                strokeWidth={1.6}
                className="
                  relative z-10

                  text-[#536A9B]

                  dark:text-cyan-100/65
                "
              />
            </div>

            {/* Small label */}
            <p
              className="
                mb-2

                text-[7px] font-bold uppercase
                tracking-[0.30em]

                text-[#A07834]/65

                dark:text-[#F0D078]/42
              "
            >
              Personal Collection
            </p>

            {/* Main title */}
            <h1
              className="
                text-[clamp(2.7rem,12vw,5.6rem)]
                font-semibold

                leading-[0.95]
                tracking-[-0.055em]

                text-[#252D3B]

                dark:text-[#F1F3F7]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Chosen{" "}
              <span
                className="
                  italic

                  bg-gradient-to-r
                  from-[#315DBB]
                  via-[#6856C8]
                  to-[#B27B2C]

                  bg-clip-text
                  text-transparent

                  dark:from-[#75DCEB]
                  dark:via-[#B9A9F5]
                  dark:to-[#F5D477]
                "
              >
                Hymns
              </span>
            </h1>

            {/* Clearly visible subtitle */}
            <p
              className="
                mx-auto mt-3
                max-w-md

                text-[9px] font-semibold uppercase
                tracking-[0.24em]

                text-[#536078]/60

                sm:text-[10px]

                dark:text-[#DDE3ED]/42
              "
            >
              Your saved songs of praise
            </p>

            {/* Crystal ornament */}
            <div
              aria-hidden="true"
              className="
                mx-auto mt-5

                flex w-[170px]
                items-center gap-3

                sm:w-[195px]
              "
            >
              <span
                className="
                  h-px flex-1

                  bg-gradient-to-r
                  from-transparent
                  to-blue-400/30

                  dark:to-cyan-300/20
                "
              />

              <span
                className="
                  h-2 w-2
                  rotate-45

                  border border-[#C69235]/60
                  bg-white/40

                  shadow-[0_0_8px_rgba(198,146,53,0.14)]

                  dark:border-[#F6D77A]/50
                  dark:bg-white/[0.025]
                "
              />

              <span
                className="
                  h-px flex-1

                  bg-gradient-to-l
                  from-transparent
                  to-violet-400/30

                  dark:to-violet-300/20
                "
              />
            </div>
          </div>
        </header>

        {/* ==========================================================
            LOADING
        ========================================================== */}
        {loading && (
          <section className="py-20 text-center">
            {/* Animated crystal */}
            <div
              className="
                relative

                mx-auto mb-5

                h-10 w-10
              "
            >
              <div
                className="
                  absolute inset-[5px]

                  rotate-45

                  rounded-[9px]

                  border border-blue-200/70

                  bg-gradient-to-br
                  from-white
                  via-blue-50
                  to-violet-100/60

                  shadow-[0_7px_18px_rgba(50,75,130,0.10)]

                  animate-pulse

                  dark:border-cyan-300/15
                  dark:from-white/[0.06]
                  dark:via-cyan-300/[0.025]
                  dark:to-violet-300/[0.035]
                "
              />
            </div>

            <p
              className="
                text-[8px] font-bold uppercase
                tracking-[0.28em]

                text-[#667085]/45

                dark:text-white/28
              "
            >
              Opening your collection
            </p>
          </section>
        )}

        {/* ==========================================================
            EMPTY COLLECTION
        ========================================================== */}
        {!loading && songs.length === 0 && (
          <section
            className="
              relative
              mt-7 overflow-hidden

              rounded-[28px]

              border border-white/90
              bg-white/48

              px-6 py-14

              text-center

              shadow-[0_18px_55px_rgba(40,55,90,0.07),inset_0_1px_0_rgba(255,255,255,1)]

              backdrop-blur-[28px]

              dark:border-white/[0.08]
              dark:bg-white/[0.03]

              dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)]
            "
          >
            {/* Subtle empty-state glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-1/2 top-0

                h-40 w-40
                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-blue-300/[0.10]
                blur-[55px]

                dark:bg-cyan-300/[0.025]
              "
            />

            <div
              className="
                relative

                mx-auto

                flex h-14 w-14
                items-center justify-center

                rounded-[18px]

                border border-blue-200/60
                bg-blue-50/60

                text-blue-600

                shadow-[inset_0_1px_0_rgba(255,255,255,1)]

                dark:border-cyan-300/15
                dark:bg-cyan-300/[0.04]
                dark:text-cyan-200
              "
            >
              <Heart
                size={21}
                strokeWidth={1.5}
              />
            </div>

            <h2
              className="
                mt-5

                text-[26px] font-semibold
                tracking-[-0.035em]

                text-[#293140]

                dark:text-[#ECEFF4]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Your collection is waiting
            </h2>

            <p
              className="
                mx-auto mt-2
                max-w-sm

                text-[12px]
                leading-6

                text-[#667085]/58

                dark:text-white/36
              "
            >
              Save the songs you return to often and they will appear
              here for quick access during worship.
            </p>

            <Link
              href="/all"
              className="
                mt-6

                inline-flex items-center gap-2

                rounded-full

                border border-blue-200/70
                bg-white/60

                px-4 py-2.5

                text-[8px] font-bold uppercase
                tracking-[0.20em]

                text-blue-600

                shadow-[0_6px_18px_rgba(45,80,160,0.06),inset_0_1px_0_rgba(255,255,255,1)]

                transition-all duration-300

                hover:-translate-y-0.5
                hover:bg-blue-50
                hover:shadow-[0_10px_25px_rgba(45,80,160,0.10)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400/60
                focus-visible:ring-offset-2

                dark:border-cyan-300/15
                dark:bg-cyan-300/[0.025]
                dark:text-cyan-200

                dark:hover:bg-cyan-300/[0.05]

                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            >
              <Music2
                size={12}
                strokeWidth={1.7}
              />

              Browse Songs
            </Link>
          </section>
        )}

        {/* ==========================================================
            SAVED SONGS
        ========================================================== */}
        {!loading && songs.length > 0 && (
          <>
            {/* List heading */}
            <div
              className="
                mb-4 mt-8

                flex items-end
                justify-between

                px-1

                sm:mb-5
                sm:mt-10
              "
            >
              <div>
                <div
                  className="
                    flex items-center gap-1.5

                    text-[7px] font-bold uppercase
                    tracking-[0.28em]

                    text-[#A07834]/65

                    dark:text-[#F0D078]/42
                  "
                >
                  <Sparkles
                    size={9}
                    strokeWidth={1.7}
                  />

                  Saved Collection
                </div>

                <h2
                  className="
                    mt-1.5

                    text-[23px] font-semibold
                    tracking-[-0.035em]

                    text-[#28303E]

                    sm:text-[27px]

                    dark:text-[#ECEFF4]
                  "
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Your songs
                </h2>
              </div>

              <span
                className="
                  hidden

                  text-[7px] font-bold uppercase
                  tracking-[0.20em]

                  text-[#667085]/35

                  sm:block

                  dark:text-white/22
                "
              >
                Tap to open
              </span>
            </div>

            {/* ======================================================
                INDIVIDUAL 3D CRYSTAL SONG CARDS
            ====================================================== */}
            <section
              aria-label="Chosen hymns"
              className="
                grid grid-cols-1
                gap-3.5

                md:grid-cols-2
                md:gap-5
              "
            >
              {songs.map((song, index) => (
                <Link
                  key={song.id}
                  href={`/song/${song.slug}`}
                  className="
                    group
                    relative block

                    rounded-[24px]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400/65
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#F7F9FD]

                    dark:focus-visible:ring-cyan-300/50
                    dark:focus-visible:ring-offset-[#090C13]
                  "
                >
                  {/* Rear 3D depth layer */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute

                      inset-x-[7px]
                      bottom-[-6px]
                      top-[10px]

                      rounded-[21px]

                      bg-gradient-to-b
                      from-[#CBD6EA]/42
                      via-[#B9C7DF]/28
                      to-[#A7B7D0]/22

                      shadow-[0_14px_25px_rgba(42,58,92,0.11)]

                      transition-all duration-300

                      group-hover:bottom-[-9px]
                      group-hover:translate-y-1

                      dark:from-white/[0.035]
                      dark:via-white/[0.018]
                      dark:to-black/25

                      dark:shadow-[0_17px_30px_rgba(0,0,0,0.35)]

                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  />

                  {/* Main glass card */}
                  <article
                    className="
                      relative

                      flex min-h-[96px]
                      items-center gap-3.5

                      overflow-hidden

                      rounded-[24px]

                      border border-white/90
                      bg-white/52

                      px-3.5 py-3.5

                      shadow-[0_12px_30px_rgba(40,55,90,0.07),inset_0_2px_1px_rgba(255,255,255,1)]

                      backdrop-blur-[28px]

                      transition-all duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:-translate-y-1.5
                      group-hover:border-blue-300/50
                      group-hover:bg-white/75

                      group-hover:shadow-[0_22px_45px_rgba(40,65,120,0.13),inset_0_2px_1px_rgba(255,255,255,1)]

                      sm:px-4

                      dark:border-white/[0.085]
                      dark:bg-white/[0.03]

                      dark:shadow-[0_14px_35px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.055)]

                      dark:group-hover:border-cyan-300/20
                      dark:group-hover:bg-white/[0.05]

                      dark:group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.40)]

                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    {/* Polished crystal surface */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-[1px]

                        rounded-[23px]

                        bg-[linear-gradient(132deg,rgba(255,255,255,0.78),rgba(255,255,255,0.09)_35%,transparent_59%,rgba(91,113,255,0.022))]

                        dark:bg-[linear-gradient(132deg,rgba(255,255,255,0.045),rgba(255,255,255,0.008)_35%,transparent_59%,rgba(103,232,249,0.01))]
                      "
                    />

                    {/* Blue internal light */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute
                        -left-14 -top-16

                        h-36 w-36
                        rounded-full

                        bg-blue-300/[0.07]
                        blur-[42px]

                        transition-colors duration-300

                        group-hover:bg-blue-300/[0.16]

                        dark:bg-cyan-300/[0.02]
                        dark:group-hover:bg-cyan-300/[0.055]
                      "
                    />

                    {/* Violet refraction */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute
                        -bottom-16 right-[12%]

                        h-32 w-32
                        rounded-full

                        bg-violet-300/[0.07]
                        blur-[40px]

                        transition-colors duration-300

                        group-hover:bg-violet-300/[0.13]

                        dark:bg-violet-300/[0.02]
                        dark:group-hover:bg-violet-300/[0.05]
                      "
                    />

                    {/* Light sweep */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute

                        -left-[45%] top-[-20%]

                        h-[140%] w-[28%]

                        rotate-[16deg]

                        bg-gradient-to-r
                        from-transparent
                        via-white/75
                        to-transparent

                        opacity-0

                        transition-[left,opacity]
                        duration-700
                        ease-out

                        group-hover:left-[120%]
                        group-hover:opacity-100

                        dark:via-white/[0.075]

                        motion-reduce:hidden
                      "
                    />

                    {/* =================================================
                        SONG NUMBER — 1, 2, 3...
                    ================================================= */}
                    <div
                      className="
                        relative z-10

                        flex h-[52px] w-[52px]
                        shrink-0
                        items-center justify-center
                      "
                    >
                      {/* Rear depth */}
                      <div
                        aria-hidden="true"
                        className="
                          absolute inset-[7px]

                          translate-x-[4px]
                          translate-y-[5px]
                          rotate-45

                          rounded-[11px]

                          bg-[#64789F]/10

                          dark:bg-black/35
                        "
                      />

                      {/* Main number crystal */}
                      <div
                        aria-hidden="true"
                        className="
                          absolute inset-[6px]

                          rotate-45

                          rounded-[11px]

                          border border-white

                          bg-gradient-to-br
                          from-white
                          via-blue-50/70
                          to-violet-100/45

                          shadow-[0_8px_18px_rgba(50,75,130,0.13),inset_1px_1px_1px_rgba(255,255,255,1)]

                          transition-transform duration-500

                          group-hover:rotate-[135deg]

                          dark:border-white/[0.10]

                          dark:bg-gradient-to-br
                          dark:from-white/[0.07]
                          dark:via-cyan-300/[0.025]
                          dark:to-violet-300/[0.035]

                          motion-reduce:transform-none
                          motion-reduce:transition-none
                        "
                      />

                      <span
                        className="
                          relative z-10

                          text-[15px] font-semibold
                          tabular-nums

                          text-[#40567C]

                          transition-colors duration-300

                          group-hover:text-blue-600

                          dark:text-white/60
                          dark:group-hover:text-cyan-200
                        "
                        style={{
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* =================================================
                        SONG INFORMATION
                    ================================================= */}
                    <div
                      className="
                        relative z-10
                        min-w-0 flex-1
                      "
                    >
                      {/* Gold accent */}
                      <div
                        aria-hidden="true"
                        className="
                          mb-1.5

                          h-px w-5

                          bg-gradient-to-r
                          from-[#B68B3D]/45
                          to-transparent

                          transition-all duration-300

                          group-hover:w-9

                          dark:from-[#F0D078]/28
                        "
                      />

                      <h3
                        className="
                          text-[17px] font-semibold
                          leading-[1.5]
                          tracking-[-0.01em]

                          text-[#252D3B]

                          transition-colors duration-300

                          group-hover:text-[#315DBB]

                          sm:text-[17px]

                          dark:text-[#EDF0F5]
                          dark:group-hover:text-cyan-100
                        "
                      >
                        {song.title}
                      </h3>

                      {/* Category, if available */}
                      {song.category && (
                        <p
                          className="
                            mt-1

                            truncate

                            text-[7px] font-semibold uppercase
                            tracking-[0.16em]

                            text-[#667085]/38

                            dark:text-white/22
                          "
                        >
                          {song.category}
                        </p>
                      )}
                    </div>

                    {/* =================================================
                        OPEN INDICATOR
                    ================================================= */}
                    <div
                      className="
                        relative z-10

                        flex h-8 w-8
                        shrink-0
                        items-center justify-center

                        rounded-full

                        border border-white/85
                        bg-white/35

                        text-[#65728A]/35

                        shadow-[0_4px_12px_rgba(40,55,90,0.05),inset_0_1px_0_rgba(255,255,255,1)]

                        transition-all duration-300

                        group-hover:translate-x-0.5
                        group-hover:border-blue-200/75
                        group-hover:bg-blue-50/70
                        group-hover:text-blue-600

                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                        dark:text-white/22

                        dark:group-hover:border-cyan-300/18
                        dark:group-hover:bg-cyan-300/[0.04]
                        dark:group-hover:text-cyan-200

                        motion-reduce:transform-none
                      "
                    >
                      <ChevronRight
                        size={13}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Champagne bottom edge */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute bottom-0

                        left-[35%] right-[35%]

                        h-px

                        bg-gradient-to-r
                        from-transparent
                        via-[#C3933C]/0
                        to-transparent

                        transition-all duration-300

                        group-hover:left-[15%]
                        group-hover:right-[15%]
                        group-hover:via-[#C3933C]/45

                        dark:group-hover:via-[#F0D078]/25
                      "
                    />
                  </article>
                </Link>
              ))}
            </section>

            {/* ======================================================
                FOOTER
            ====================================================== */}
            <footer
              className="
                mt-14
                flex flex-col
                items-center

                sm:mt-16
              "
            >
              <div
                aria-hidden="true"
                className="
                  flex w-[180px]
                  items-center gap-3
                "
              >
                <span
                  className="
                    h-px flex-1

                    bg-gradient-to-r
                    from-transparent
                    to-[#B68B3D]/28

                    dark:to-[#F0D078]/18
                  "
                />

                <span
                  className="
                    h-[7px] w-[7px]
                    rotate-45

                    border border-[#B68B3D]/50

                    dark:border-[#F0D078]/35
                  "
                />

                <span
                  className="
                    h-px flex-1

                    bg-gradient-to-l
                    from-transparent
                    to-[#B68B3D]/28

                    dark:to-[#F0D078]/18
                  "
                />
              </div>

              <p
                className="
                  mt-3

                  text-[6px] font-bold uppercase
                  tracking-[0.32em]

                  text-[#667085]/27

                  dark:text-white/16
                "
              >
                Amor Dei Ministries
              </p>
            </footer>
          </>
        )}
      </div>
    </main>
  )
}