import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Music2,
  Sparkles,
} from "lucide-react"

import AddToCollectionButton from "@/app/components/AddToCollectionButton"
import NoCopyLyrics from "@/app/NoCopyLyrics"
import { fetchSongBySlug, fetchSongs } from "@/lib/api"

export const dynamicParams = true

interface Song {
  id: number
  title: string
  slug: string
  category: string
  lyrics: string
}

export async function generateStaticParams() {
  const songs = await fetchSongs()

  return songs.map((song) => ({
    slug: song.slug,
  }))
}

export default async function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const song = await fetchSongBySlug(slug)

  if (!song) notFound()

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
          CRYSTAL LIGHT ENVIRONMENT
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          overflow-hidden
        "
      >
        {/* Sapphire ambient light */}
        <div
          className="
            absolute
            -left-[260px] -top-[180px]

            h-[620px] w-[620px]
            rounded-full

            bg-blue-400/[0.16]
            blur-[150px]

            sm:h-[760px]
            sm:w-[760px]

            dark:bg-cyan-400/[0.055]
          "
        />

        {/* Violet refraction */}
        <div
          className="
            absolute
            -right-[260px] top-[24%]

            h-[560px] w-[560px]
            rounded-full

            bg-violet-400/[0.12]
            blur-[150px]

            dark:bg-violet-500/[0.05]
          "
        />

        {/* Warm crystal reflection */}
        <div
          className="
            absolute
            bottom-[-180px] left-[18%]

            h-[500px] w-[500px]
            rounded-full

            bg-amber-300/[0.07]
            blur-[145px]

            dark:bg-amber-300/[0.018]
          "
        />

        {/* Fine background grid */}
        <div
          className="
            absolute inset-0

            opacity-[0.18]

            [background-image:linear-gradient(to_right,rgba(65,82,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(65,82,120,0.04)_1px,transparent_1px)]
            [background-size:52px_52px]

            [mask-image:linear-gradient(to_bottom,black,transparent_85%)]

            dark:opacity-[0.065]
          "
        />

        {/* Central reading illumination */}
        <div
          className="
            absolute
            left-1/2 top-[100px]

            h-[700px] w-[90%]
            -translate-x-1/2

            rounded-full

            bg-white/60
            blur-[130px]

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

          w-full max-w-3xl

          px-3
          pb-20 pt-4

          sm:px-6
          sm:pb-24
          sm:pt-6
        "
      >
        {/* ==========================================================
            NAVIGATION
        ========================================================== */}
        <nav
          aria-label="Song navigation"
          className="
            mb-5
            flex items-center
            justify-between
          "
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
            SONG TITLE CRYSTAL
        ========================================================== */}
        <header
          className="
            relative isolate
            overflow-hidden

            rounded-[28px]

            border border-white/90
            bg-white/48

            px-5 py-8

            text-center

            shadow-[0_25px_65px_rgba(38,54,90,0.085),0_8px_20px_rgba(38,54,90,0.035),inset_0_2px_1px_rgba(255,255,255,1)]

            backdrop-blur-[32px]

            sm:rounded-[34px]
            sm:px-9
            sm:py-10

            dark:border-white/[0.09]
            dark:bg-white/[0.032]

            dark:shadow-[0_30px_75px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.065)]
          "
        >
          {/* Crystal surface */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute inset-[1px] -z-10

              rounded-[27px]

              bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,255,255,0.13)_34%,transparent_60%,rgba(91,113,255,0.025))]

              sm:rounded-[33px]

              dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_34%,transparent_60%,rgba(103,232,249,0.012))]
            "
          />

          {/* Blue refraction */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -left-20 -top-20 -z-10

              h-56 w-56
              rounded-full

              bg-blue-300/[0.17]
              blur-[75px]

              dark:bg-cyan-300/[0.05]
            "
          />

          {/* Violet refraction */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -bottom-24 -right-16 -z-10

              h-64 w-64
              rounded-full

              bg-violet-300/[0.13]
              blur-[80px]

              dark:bg-violet-400/[0.045]
            "
          />

          {/* Warm central reflection */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              bottom-[-90px] left-1/2 -z-10

              h-40 w-72
              -translate-x-1/2

              rounded-full

              bg-amber-200/[0.09]
              blur-[65px]

              dark:bg-amber-300/[0.02]
            "
          />

          {/* Specular top edge */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              left-[14%] right-[14%] top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent

              dark:via-white/25
            "
          />

          

          

          {/* Song title */}
          <h1
            className="
              mx-auto max-w-2xl

              text-[clamp(1.8rem,8vw,3.7rem)]
              font-semibold

              leading-[1.14]
              tracking-[-0.035em]

              text-[#242C3A]

              dark:text-[#F1F3F7]
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            {song.title}
          </h1>

          

          {/* Crystal ornament */}
          <div
            aria-hidden="true"
            className="
              mx-auto mt-5

              flex w-[160px]
              items-center gap-3

              sm:w-[190px]
            "
          >
            <span
              className="
                h-px flex-1

                bg-gradient-to-r
                from-transparent
                to-blue-400/30

                dark:to-cyan-300/18
              "
            />

            <span
              className="
                h-2 w-2
                rotate-45

                border border-[#C69235]/60
                bg-white/40

                shadow-[0_0_8px_rgba(198,146,53,0.14)]

                dark:border-[#F6D77A]/48
                dark:bg-white/[0.025]
              "
            />

            <span
              className="
                h-px flex-1

                bg-gradient-to-l
                from-transparent
                to-violet-400/30

                dark:to-violet-300/18
              "
            />
          </div>
        </header>

        {/* ==========================================================
            LYRICS CRYSTAL
        ========================================================== */}
        <article
          className="
            relative isolate

            mt-5

            overflow-hidden

            rounded-[28px]

            border border-white/90
            bg-white/58

            shadow-[0_22px_65px_rgba(38,54,90,0.075),0_7px_18px_rgba(38,54,90,0.035),inset_0_2px_1px_rgba(255,255,255,1)]

            backdrop-blur-[30px]

            sm:mt-6
            sm:rounded-[34px]

            dark:border-white/[0.085]
            dark:bg-white/[0.035]

            dark:shadow-[0_28px_75px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.055)]
          "
        >
          {/* ======================================================
              GLASS SURFACE
          ====================================================== */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute inset-[1px] -z-10

              rounded-[27px]

              bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.08)_32%,transparent_57%,rgba(91,113,255,0.018))]

              sm:rounded-[33px]

              dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.006)_32%,transparent_57%,rgba(103,232,249,0.008))]
            "
          />

          {/* Subtle blue light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -left-28 top-[15%] -z-10

              h-64 w-64
              rounded-full

              bg-blue-300/[0.055]
              blur-[85px]

              dark:bg-cyan-300/[0.018]
            "
          />

          {/* Subtle violet light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -right-28 bottom-[15%] -z-10

              h-64 w-64
              rounded-full

              bg-violet-300/[0.05]
              blur-[85px]

              dark:bg-violet-300/[0.016]
            "
          />

          {/* ======================================================
              TOP CRYSTAL EDGE
          ====================================================== */}
          <div
            aria-hidden="true"
            className="
              h-[2px] w-full

              bg-gradient-to-r
              from-transparent
              via-blue-400/45
              to-transparent

              dark:via-cyan-300/25
            "
          />

          {/* ======================================================
              SMALL LYRICS LABEL
          ====================================================== */}
          <div
            className="
              flex items-center
              justify-center

              pt-7

              sm:pt-9
            "
          >
            <div
              className="
                inline-flex items-center gap-2

                rounded-full

                border border-[#26344F]/[0.055]
                bg-white/35

                px-3 py-1.5

                shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

                dark:border-white/[0.055]
                dark:bg-white/[0.018]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1.5 w-1.5
                  rotate-45

                  border border-[#B58B3D]/55

                  dark:border-[#F0D078]/35
                "
              />

              <span
                className="
                  text-[6px] font-bold uppercase
                  tracking-[0.27em]

                  text-[#667085]/42

                  dark:text-white/25
                "
              >
                Lyrics
              </span>
            </div>
          </div>

          {/* ======================================================
              LYRICS

              Intentionally cleaner than the rest of the design.
              The text must remain the primary worship interface.
          ====================================================== */}
          <div
            className="
              px-4
              pb-10 pt-7

              sm:px-10
              sm:pb-12
              sm:pt-9

              md:px-12
            "
          >
            <NoCopyLyrics lyrics={song.lyrics} />
          </div>

          {/* ======================================================
              END ORNAMENT
          ====================================================== */}
          <div
            aria-hidden="true"
            className="
              flex items-center
              justify-center gap-3

              px-6
            "
          >
            <span
              className="
                h-px w-12

                bg-gradient-to-r
                from-transparent
                to-[#B68B3D]/30

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
                h-px w-12

                bg-gradient-to-l
                from-transparent
                to-[#B68B3D]/30

                dark:to-[#F0D078]/18
              "
            />
          </div>

          {/* ======================================================
              COLLECTION ACTION
          ====================================================== */}
          <div
            className="
              flex justify-center

              px-4
              pb-7 pt-7

              sm:pb-8
            "
          >
            <AddToCollectionButton slug={song.slug} />
          </div>

          {/* ======================================================
              AMEN
          ====================================================== */}
          <div
            className="
              pb-8

              text-center

              sm:pb-9
            "
          >
            <p
              className="
                text-[7px] font-bold uppercase
                tracking-[0.34em]

                text-[#667085]/35

                dark:text-white/21
              "
            >
              Amen
            </p>
          </div>

          {/* Bottom crystal edge */}
          <div
            aria-hidden="true"
            className="
              h-[2px] w-full

              bg-gradient-to-r
              from-transparent
              via-violet-400/35
              to-transparent

              dark:via-violet-300/20
            "
          />
        </article>

        {/* ==========================================================
            FOOTER
        ========================================================== */}
        <footer
          className="
            mt-12
            flex flex-col
            items-center

            sm:mt-14
          "
        >
          <div
            aria-hidden="true"
            className="
              flex w-[170px]
              items-center gap-3
            "
          >
            <span
              className="
                h-px flex-1

                bg-gradient-to-r
                from-transparent
                to-[#B68B3D]/25

                dark:to-[#F0D078]/16
              "
            />

            <span
              className="
                h-1.5 w-1.5
                rotate-45

                border border-[#B68B3D]/45

                dark:border-[#F0D078]/30
              "
            />

            <span
              className="
                h-px flex-1

                bg-gradient-to-l
                from-transparent
                to-[#B68B3D]/25

                dark:to-[#F0D078]/16
              "
            />
          </div>

          <p
            className="
              mt-4

              text-[6px] font-bold uppercase
              tracking-[0.32em]

              text-[#667085]/27

              dark:text-white/16
            "
          >
            © Amor Dei Ministries
          </p>
        </footer>
      </div>
    </main>
  )
}