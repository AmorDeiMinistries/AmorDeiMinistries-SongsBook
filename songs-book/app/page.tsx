import Link from "next/link"
import type { CSSProperties } from "react"
import { Cormorant_Garamond, Inter } from "next/font/google"
import {
  Music2,
  ListOrdered,
  Layers3,
  Bookmark,
  ArrowUpRight,
  Search,
  Sparkles,
} from "lucide-react"

import { fetchSongs } from "@/lib/api"
import HomeSearch from "./components/HomeSearch"
import CrystalHero from "./components/CrystalHero"

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const categories = [
  {
    title: "Songs of Praise",
    description: "Enter the complete collection of hymns.",
    meta: "Whole book",
    href: "/all",
    icon: Music2,
    number: "01",
    accent: "#2563EB",
    darkAccent: "#67E8F9",
  },
  {
    title: "Alphabet of Praise",
    description: "Find a hymn quickly from A to Z.",
    meta: "A — Z",
    href: "/alphabet",
    icon: ListOrdered,
    number: "02",
    accent: "#7C3AED",
    darkAccent: "#C4B5FD",
  },
  {
    title: "Themes of Praise",
    description: "Discover hymns for worship and occasions.",
    meta: "By occasion",
    href: "/type",
    icon: Layers3,
    number: "03",
    accent: "#C026D3",
    darkAccent: "#F0ABFC",
  },
  {
    title: "Chosen Hymns",
    description: "Return to the hymns you have saved.",
    meta: "My favorites",
    href: "/collections",
    icon: Bookmark,
    number: "04",
    accent: "#B7791F",
    darkAccent: "#F6D77A",
  },
] as const

export default async function HomePage() {
  // Preserve the existing server-side data flow.
  const songs = await fetchSongs()

  return (
    <main
      className={`
        ${display.variable}
        ${sans.variable}
        relative min-h-screen overflow-hidden
        bg-[#F8FAFF] text-[#151923]
        dark:bg-[#070A12] dark:text-[#F7F8FC]
      `}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ============================================================ */}
      {/* GLOBAL CRYSTAL ENVIRONMENT                                  */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        {/* Pearl base */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_0%,#FFFFFF_0%,#F8FAFF_40%,#F2F5FB_100%)]
            dark:bg-[radial-gradient(circle_at_50%_0%,#17203A_0%,#0A0E19_42%,#060810_100%)]
          "
        />

        {/* Sapphire refraction */}
        <div
          className="
            absolute -left-[240px] top-[2%]
            h-[620px] w-[620px]
            rounded-full
            bg-blue-400/[0.14]
            blur-[150px]
            dark:bg-cyan-400/[0.11]
          "
        />

        {/* Violet refraction */}
        <div
          className="
            absolute -right-[260px] top-[12%]
            h-[680px] w-[680px]
            rounded-full
            bg-violet-400/[0.14]
            blur-[170px]
            dark:bg-violet-500/[0.14]
          "
        />

        {/* Rose prism */}
        <div
          className="
            absolute left-[28%] top-[48%]
            h-[460px] w-[460px]
            rounded-full
            bg-fuchsia-300/[0.08]
            blur-[160px]
            dark:bg-fuchsia-500/[0.07]
          "
        />

        {/* Champagne lower reflection */}
        <div
          className="
            absolute -bottom-[280px] left-1/2
            h-[520px] w-[800px]
            -translate-x-1/2 rounded-full
            bg-amber-300/[0.10]
            blur-[170px]
            dark:bg-amber-400/[0.06]
          "
        />

        {/* Very subtle architectural grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.018]
            [background-image:linear-gradient(#172033_1px,transparent_1px),linear-gradient(90deg,#172033_1px,transparent_1px)]
            [background-size:56px_56px]
            [mask-image:linear-gradient(to_bottom,black,transparent_88%)]

            dark:opacity-[0.025]
            dark:[background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
          "
        />

        {/* Soft vignette */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(25,35,55,0.045)_100%)]
            dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.42)_100%)]
          "
        />
      </div>

      {/* ============================================================ */}
      {/* CRYSTAL TITLE HERO                                          */}
      {/* ============================================================ */}

      <CrystalHero />

      {/* ============================================================ */}
      {/* MAIN CONTENT                                                */}
      {/* ============================================================ */}

      <div
        className="
          relative z-10 mx-auto
          w-full max-w-[850px]
          px-5 pb-24
          sm:px-8
          md:pb-32
        "
      >
        {/* ========================================================== */}
        {/* SCRIPTURE                                                  */}
        {/* ========================================================== */}

        

        {/* ========================================================== */}
        {/* SEARCH                                                     */}
        {/* ========================================================== */}

        <section
          aria-labelledby="find-hymn"
          className="py-7 sm:py-9"
        >
          <div
            className="
              relative overflow-visible
              rounded-[30px]

              border border-white/85
              bg-white/60

              px-5 py-6
              sm:px-8 sm:py-8

              shadow-[0_24px_70px_rgba(40,55,90,0.075),inset_0_1px_0_rgba(255,255,255,0.95)]

              backdrop-blur-[30px]

              dark:border-white/[0.11]
              dark:bg-white/[0.05]
              dark:shadow-[0_28px_75px_rgba(0,0,0,0.27),inset_0_1px_0_rgba(255,255,255,0.09)]
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-8 top-0
                h-px

                bg-gradient-to-r
                from-transparent via-white to-transparent

                dark:via-white/30
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-20 -top-16
                h-52 w-52 rounded-full
                bg-violet-300/[0.12] blur-[70px]

                dark:bg-violet-500/[0.09]
              "
            />

            <div className="relative z-10">
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="
                      flex h-8 w-8 items-center justify-center
                      rounded-[10px]

                      border border-blue-200/80
                      bg-blue-50/80
                      text-[#3563C7]

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

                      dark:border-cyan-300/20
                      dark:bg-cyan-300/[0.07]
                      dark:text-cyan-300
                    "
                  >
                    <Search
                      aria-hidden="true"
                      size={14}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span
                    className="
                      text-[9px] font-bold uppercase
                      tracking-[0.2em]
                      text-[#3563C7]/75

                      dark:text-cyan-300/70
                    "
                  >
                    Quick search
                  </span>
                </div>

                <h2
                  id="find-hymn"
                  className="
                    text-[28px] font-semibold
                    tracking-[-0.035em]
                    text-[#151923]
                    sm:text-[34px]

                    dark:text-white
                  "
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Find your hymn
                </h2>

                
              </div>

              {/* Existing HomeSearch functionality remains untouched. */}
              <HomeSearch songs={songs} />
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* HYMN CATEGORIES                                            */}
        {/* ========================================================== */}

        <section
          aria-labelledby="browse-hymnal"
          className="pt-10 sm:pt-12"
        >
          <div className="mb-7 px-1">
            <p
              className="
                mb-2 text-[9px] font-bold uppercase
                tracking-[0.22em]
                text-[#151923]/35

                dark:text-white/30
              "
            >
              Explore the collection
            </p>

            <h2
              id="browse-hymnal"
              className="
                text-[30px] font-semibold
                tracking-[-0.04em]
                text-[#151923]
                sm:text-[36px]

                dark:text-white
              "
              style={{ fontFamily: "var(--font-display)" }}
            >
              Browse the hymnal
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon

              return (
                <Link
                  key={category.href}
                  href={category.href}
                  style={
                    {
                      "--accent": category.accent,
                      "--dark-accent": category.darkAccent,
                    } as CSSProperties
                  }
                  className="
                    group relative
                    min-h-[176px]
                    overflow-hidden
                    rounded-[27px]

                    border border-white/85
                    bg-white/55
                    p-5

                    shadow-[0_20px_55px_rgba(40,55,90,0.07),inset_0_1px_0_rgba(255,255,255,0.95)]

                    backdrop-blur-[26px]

                    transition-[transform,border-color,box-shadow,background-color]
                    duration-300 ease-out

                    hover:-translate-y-1.5
                    hover:border-[var(--accent)]
                    hover:bg-white/75
                    hover:shadow-[0_26px_65px_rgba(40,55,90,0.11),inset_0_1px_0_rgba(255,255,255,1)]

                    focus-visible:-translate-y-1
                    focus-visible:border-[var(--accent)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--accent)]
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-[#F8FAFF]

                    dark:border-white/[0.11]
                    dark:bg-white/[0.05]
                    dark:shadow-[0_22px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.09)]

                    dark:hover:border-[var(--dark-accent)]
                    dark:hover:bg-white/[0.075]
                    dark:hover:shadow-[0_30px_75px_rgba(0,0,0,0.3)]

                    dark:focus-visible:border-[var(--dark-accent)]
                    dark:focus-visible:ring-[var(--dark-accent)]
                    dark:focus-visible:ring-offset-[#070A12]

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  {/* Crystal surface */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-[1px]
                      rounded-[26px]

                      bg-[linear-gradient(135deg,rgba(255,255,255,0.65),transparent_38%,transparent_70%,rgba(80,100,255,0.02))]

                      dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%,transparent_70%,rgba(80,200,255,0.02))]
                    "
                  />

                  {/* Colored refraction */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute -bottom-20 -right-12
                      h-40 w-40 rounded-full

                      bg-[var(--accent)]
                      opacity-[0.035]
                      blur-[45px]

                      transition-opacity duration-300

                      group-hover:opacity-[0.12]
                      group-focus-visible:opacity-[0.12]

                      dark:bg-[var(--dark-accent)]
                      dark:opacity-[0.035]
                      dark:group-hover:opacity-[0.10]

                      motion-reduce:transition-none
                    "
                  />

                  {/* Specular highlight */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute left-6 right-6 top-0
                      h-px

                      bg-gradient-to-r
                      from-transparent via-white to-transparent

                      dark:via-white/25
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex h-11 w-11 items-center justify-center
                          rounded-[14px]

                          border border-[var(--accent)]
                          bg-white/60
                          text-[var(--accent)]

                          shadow-[0_6px_18px_rgba(40,55,90,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]

                          transition-[transform,background-color,color,box-shadow]
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:bg-[var(--accent)]
                          group-hover:text-white
                          group-hover:shadow-[0_10px_25px_rgba(40,55,90,0.14)]

                          dark:border-[var(--dark-accent)]
                          dark:bg-white/[0.045]
                          dark:text-[var(--dark-accent)]

                          dark:group-hover:bg-[var(--dark-accent)]
                          dark:group-hover:text-[#071018]

                          motion-reduce:transform-none
                          motion-reduce:transition-none
                        "
                      >
                        <Icon
                          aria-hidden="true"
                          size={19}
                          strokeWidth={1.7}
                        />
                      </div>

                      <span
                        className="
                          text-[9px] font-semibold
                          tabular-nums tracking-[0.18em]
                          text-[#151923]/20

                          dark:text-white/20
                        "
                      >
                        {category.number}
                      </span>
                    </div>

                    <div className="mt-9">
                      <p
                        className="
                          mb-1.5
                          text-[9px] font-semibold uppercase
                          tracking-[0.14em]
                          text-[var(--accent)]

                          dark:text-[var(--dark-accent)]
                        "
                      >
                        {category.meta}
                      </p>

                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3
                            className="
                              text-[18px] font-semibold
                              tracking-[-0.025em]
                              text-[#151923]

                              dark:text-white
                            "
                          >
                            {category.title}
                          </h3>

                          <p
                            className="
                              mt-1.5
                              text-[11px] leading-relaxed
                              text-[#151923]/38

                              dark:text-white/35
                            "
                          >
                            {category.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          aria-hidden="true"
                          size={17}
                          strokeWidth={1.5}
                          className="
                            mb-1 shrink-0
                            text-[#151923]/25

                            transition-[transform,color]
                            duration-300

                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                            group-hover:text-[var(--accent)]

                            dark:text-white/25
                            dark:group-hover:text-[var(--dark-accent)]

                            motion-reduce:transform-none
                            motion-reduce:transition-none
                          "
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ========================================================== */}
        {/* FOOTER                                                     */}
        {/* ========================================================== */}

        <footer className="mt-24 text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-5 flex w-36 items-center gap-3"
          >
            <span
              className="
                h-px flex-1
                bg-gradient-to-r
                from-transparent to-blue-400/30

                dark:to-cyan-300/25
              "
            />

            <span
              className="
                h-1.5 w-1.5 rotate-45
                bg-[#D0A34A]

                shadow-[0_0_12px_rgba(208,163,74,0.25)]

                dark:bg-[#F6D77A]
                dark:shadow-[0_0_12px_rgba(246,215,122,0.3)]
              "
            />

            <span
              className="
                h-px flex-1
                bg-gradient-to-l
                from-transparent to-violet-400/30

                dark:to-violet-300/25
              "
            />
          </div>

          <p
            className="
              text-[9px] font-semibold uppercase
              tracking-[0.28em]
              text-[#151923]/28

              dark:text-white/28
            "
          >
            Amor Dei Ministries
          </p>

          <p
            className="
              mt-2 text-[11px]
              text-[#151923]/25

              dark:text-white/20
            "
          >
            - - - - 
          </p>
        </footer>
      </div>
    </main>
  )
}