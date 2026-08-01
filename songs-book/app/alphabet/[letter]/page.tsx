import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { fetchSongsByLetter } from "@/lib/api"

export const dynamicParams = true

export async function generateStaticParams() {
  const letters = [
    "అ","ఆ","ఇ","ఈ","ఉ","ఊ","ఋ","ఎ","ఏ","ఐ","ఒ","ఓ","ఔ",
    "క","ఖ","గ","ఘ","ఙ",
    "చ","ఛ","జ","ఝ","ఞ",
    "ట","ఠ","డ","ఢ","ణ",
    "త","థ","ద","ధ","న",
    "ప","ఫ","బ","భ","మ",
    "య","ర","ల","వ",
    "శ","ష","స","హ",
    "ళ","క్ష","ఱ"
  ]

  return letters.map((letter) => ({
    letter,
  }))
}

type Song = {
  id: number
  title: string
  slug: string
  category: string
  lyrics: string
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ letter: string }>
}) {
  const { letter } = await params
  const decodedLetter = decodeURIComponent(letter)

  // Existing working API logic — unchanged.
  const filteredSongs = await fetchSongsByLetter(decodedLetter)

  return (
    <main
      className="
        relative min-h-screen overflow-x-hidden
        bg-[#F7F9FD]
        text-[#202735]

        dark:bg-[#090C13]
        dark:text-[#F2F4F8]
      "
    >
      {/* ============================================================
          CRYSTAL BACKGROUND
      ============================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Blue ambient light */}
        <div
          className="
            absolute -left-[220px] -top-[180px]
            h-[520px] w-[520px]
            rounded-full
            bg-blue-400/[0.17]
            blur-[135px]

            sm:h-[700px]
            sm:w-[700px]

            dark:bg-cyan-400/[0.055]
          "
        />

        {/* Violet ambient light */}
        <div
          className="
            absolute -right-[250px] top-[18%]
            h-[520px] w-[520px]
            rounded-full
            bg-violet-400/[0.13]
            blur-[145px]

            dark:bg-violet-500/[0.055]
          "
        />

        {/* Warm crystal reflection */}
        <div
          className="
            absolute bottom-[-200px] left-[20%]
            h-[500px] w-[500px]
            rounded-full
            bg-amber-300/[0.07]
            blur-[150px]

            dark:bg-amber-300/[0.018]
          "
        />

        {/* Very subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.18]

            [background-image:linear-gradient(to_right,rgba(65,82,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(65,82,120,0.04)_1px,transparent_1px)]
            [background-size:52px_52px]

            [mask-image:linear-gradient(to_bottom,black,transparent_80%)]

            dark:opacity-[0.06]
          "
        />

        {/* Center illumination */}
        <div
          className="
            absolute left-1/2 top-[80px]
            h-[430px] w-[90%]
            -translate-x-1/2
            rounded-full
            bg-white/60
            blur-[120px]

            dark:bg-white/[0.012]
          "
        />
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}
      <div
        className="
          relative z-10
          mx-auto w-full max-w-4xl

          px-4 pb-20 pt-4
          sm:px-6 sm:pb-24 sm:pt-6
        "
      >
        {/* ==========================================================
            BACK
        ========================================================== */}
        <nav className="mb-4">
          <Link
            href="/alphabet"
            className="
              group
              inline-flex items-center gap-2

              rounded-full
              border border-white/90
              bg-white/55

              px-3.5 py-2

              text-[8px] font-bold uppercase
              tracking-[0.20em]

              text-[#536078]/65

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
              dark:text-white/45

              dark:hover:border-cyan-300/20
              dark:hover:bg-white/[0.05]
              dark:hover:text-cyan-200

              dark:focus-visible:ring-cyan-300/50
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

            Alphabet
          </Link>
        </nav>

        {/* ==========================================================
            SELECTED LETTER — CRYSTAL HERO
        ========================================================== */}
        <header
          className="
            relative isolate
            overflow-hidden

            rounded-[30px]

            border border-white/90
            bg-white/48

            px-5 py-7

            shadow-[
              0_28px_70px_rgba(38,54,90,0.09),
              0_8px_20px_rgba(38,54,90,0.04),
              inset_0_2px_1px_rgba(255,255,255,1)
            ]

            backdrop-blur-[32px]

            sm:px-8
            sm:py-9

            dark:border-white/[0.10]
            dark:bg-white/[0.035]

            dark:shadow-[
              0_30px_80px_rgba(0,0,0,0.35),
              inset_0_1px_0_rgba(255,255,255,0.07)
            ]
          "
        >
          {/* Crystal face */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-[1px] -z-10

              rounded-[29px]

              bg-[linear-gradient(135deg,rgba(255,255,255,0.90),rgba(255,255,255,0.13)_34%,transparent_58%,rgba(91,113,255,0.025))]

              dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_34%,transparent_58%,rgba(103,232,249,0.012))]
            "
          />

          {/* Sapphire refraction */}
          <div
            aria-hidden="true"
            className="
              absolute -left-16 -top-20 -z-10
              h-56 w-56
              rounded-full
              bg-blue-300/[0.18]
              blur-[75px]

              dark:bg-cyan-300/[0.055]
            "
          />

          {/* Violet refraction */}
          <div
            aria-hidden="true"
            className="
              absolute -bottom-24 -right-14 -z-10
              h-64 w-64
              rounded-full
              bg-violet-300/[0.14]
              blur-[80px]

              dark:bg-violet-400/[0.05]
            "
          />

          {/* Gold reflection */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-[-90px] left-1/2 -z-10
              h-40 w-64
              -translate-x-1/2
              rounded-full
              bg-amber-200/[0.09]
              blur-[65px]

              dark:bg-amber-300/[0.025]
            "
          />

          {/* Glass highlight */}
          <div
            aria-hidden="true"
            className="
              absolute left-[12%] right-[12%] top-0
              h-px

              bg-gradient-to-r
              from-transparent via-white to-transparent

              dark:via-white/25
            "
          />

          {/* Song count — deliberately quiet */}
          <div
            className="
              absolute right-4 top-4
              flex items-center gap-2
              select-none

              sm:right-6 sm:top-5
            "
          >
            <span
              className="
                h-[7px] w-[7px]
                rotate-45

                border border-[#66789A]/25

                bg-gradient-to-br
                from-blue-300/25
                via-white/60
                to-violet-300/25

                dark:border-white/15
                dark:from-cyan-300/10
                dark:via-white/10
                dark:to-violet-300/10
              "
            />

            <span
              className="
                text-[16px] font-light
                tabular-nums
                tracking-[0.06em]

                text-[#536078]/45

                dark:text-white/30
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              {filteredSongs.length}
            </span>

            <span
              className="
                text-[5px] font-bold uppercase
                tracking-[0.25em]

                text-[#667085]/35

                dark:text-white/20
              "
            >
              Songs
            </span>
          </div>

          {/* Main selected-letter presentation */}
          <div className="relative z-10 text-center">
            <p
              className="
                mb-4

                text-[8px] font-bold uppercase
                tracking-[0.30em]

                text-[#59677E]/65

                dark:text-white/42
              "
            >
              Songs Beginning With
            </p>

            {/* 3D crystal letter */}
            <div
              className="
                relative
                mx-auto

                flex h-[112px] w-[112px]
                items-center justify-center

                sm:h-[130px]
                sm:w-[130px]
              "
            >
              {/* Rear crystal plate */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-[13px]

                  translate-x-[7px]
                  translate-y-[9px]
                  rotate-45

                  rounded-[24px]

                  bg-[#6D7FA5]/12

                  shadow-[0_16px_30px_rgba(50,65,100,0.12)]

                  dark:bg-black/30
                "
              />

              {/* Main crystal */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-[10px]

                  rotate-45

                  rounded-[24px]

                  border border-white

                  bg-gradient-to-br
                  from-white
                  via-blue-50/75
                  to-violet-100/50

                  shadow-[
                    0_18px_38px_rgba(50,75,130,0.15),
                    inset_2px_2px_2px_rgba(255,255,255,1),
                    inset_-1px_-1px_2px_rgba(80,100,160,0.08)
                  ]

                  dark:border-white/[0.12]

                  dark:bg-gradient-to-br
                  dark:from-white/[0.08]
                  dark:via-cyan-300/[0.025]
                  dark:to-violet-300/[0.04]

                  dark:shadow-[
                    0_20px_45px_rgba(0,0,0,0.38),
                    0_0_30px_rgba(80,210,240,0.035),
                    inset_1px_1px_0_rgba(255,255,255,0.08)
                  ]
                "
              />

              {/* Internal blue light */}
              <div
                aria-hidden="true"
                className="
                  absolute left-[20%] top-[20%]
                  h-10 w-10
                  rounded-full
                  bg-blue-400/20
                  blur-xl

                  dark:bg-cyan-300/10
                "
              />

              {/* Internal gold light */}
              <div
                aria-hidden="true"
                className="
                  absolute bottom-[18%] right-[18%]
                  h-8 w-8
                  rounded-full
                  bg-amber-300/20
                  blur-xl

                  dark:bg-amber-300/08
                "
              />

              {/* Telugu letter */}
              <span
                className="
                  relative z-10

                  bg-gradient-to-br
                  from-[#274FAD]
                  via-[#6653C4]
                  to-[#A87728]

                  bg-clip-text
                  text-transparent

                  text-[48px]
                  font-bold
                  leading-none

                  sm:text-[56px]

                  dark:from-[#80E2EE]
                  dark:via-[#B6A8F2]
                  dark:to-[#F2D278]
                "
              >
                {decodedLetter}
              </span>
            </div>

            

            <p
              className="
                mt-1.5

                text-[8px] font-semibold uppercase
                tracking-[0.25em]

                text-[#667085]/55

                dark:text-white/35
              "
            >
              Alphabet of Praise
            </p>
          </div>
        </header>

        {/* ==========================================================
            SONG LIST INTRO
        ========================================================== */}
        {filteredSongs.length > 0 && (
          <div
            className="
              mb-4 mt-8
              flex items-end justify-between
              px-1

              sm:mb-5
              sm:mt-10
            "
          >
            <div>
              <p
                className="
                  text-[7px] font-bold uppercase
                  tracking-[0.27em]

                  text-[#A07834]/65

                  dark:text-[#F0D078]/42
                "
              >
                {filteredSongs.length}{" "}
                {filteredSongs.length === 1 ? "Song" : "Songs"}
              </p>

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
                Choose a song
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
        )}

        {/* ==========================================================
            EMPTY STATE
        ========================================================== */}
        {filteredSongs.length === 0 ? (
          <div
            className="
              mt-7

              rounded-[26px]

              border border-white/90
              bg-white/50

              px-6 py-14

              text-center

              shadow-[0_18px_50px_rgba(40,55,90,0.07),inset_0_1px_0_rgba(255,255,255,1)]

              backdrop-blur-[28px]

              dark:border-white/[0.08]
              dark:bg-white/[0.03]

              dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)]
            "
          >
            <p
              className="
                text-[22px] font-semibold

                text-[#303949]

                dark:text-[#ECEFF4]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              No songs found
            </p>

            <p
              className="
                mt-2 text-[12px]
                text-[#667085]/55

                dark:text-white/35
              "
            >
              There are currently no songs beginning with {decodedLetter}.
            </p>
          </div>
        ) : (
          /* ========================================================
              INDIVIDUAL 3D CRYSTAL SONG CARDS
          ======================================================== */
          <section
            aria-label={`Songs beginning with ${decodedLetter}`}
            className="
              grid grid-cols-1
              gap-3.5

              md:grid-cols-2
              md:gap-5
            "
          >
            {filteredSongs.map((song, index) => (
              <Link
                key={song.id}
                href={`/song/${song.slug}`}
                prefetch={false}
                className="
                  group relative block

                  rounded-[23px]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400/60
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F7F9FD]

                  dark:focus-visible:ring-cyan-300/45
                  dark:focus-visible:ring-offset-[#090C13]
                "
              >
                {/* Rear 3D layer */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-[7px]
                    bottom-[-5px]
                    top-[10px]

                    rounded-[21px]

                    bg-gradient-to-b
                    from-[#CBD6EA]/30
                    to-[#A9B8D2]/18

                    shadow-[0_14px_26px_rgba(42,58,92,0.10)]

                    transition-all duration-400

                    group-hover:bottom-[-8px]
                    group-hover:translate-y-1

                    dark:from-white/[0.025]
                    dark:to-black/20
                    dark:shadow-[0_17px_30px_rgba(0,0,0,0.30)]

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                />

                {/* Main card */}
                <article
                  className="
                    relative

                    flex min-h-[92px]
                    items-center gap-3.5

                    overflow-hidden

                    rounded-[23px]

                    border border-white/90
                    bg-white/52

                    px-3.5 py-3.5

                    shadow-[0_12px_30px_rgba(40,55,90,0.07),inset_0_2px_1px_rgba(255,255,255,1)]

                    backdrop-blur-[28px]

                    transition-all duration-400
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:-translate-y-1.5
                    group-hover:border-blue-300/45
                    group-hover:bg-white/72

                    group-hover:shadow-[0_22px_45px_rgba(40,65,120,0.12),inset_0_2px_1px_rgba(255,255,255,1)]

                    dark:border-white/[0.085]
                    dark:bg-white/[0.03]

                    dark:shadow-[0_14px_35px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.055)]

                    dark:group-hover:border-cyan-300/20
                    dark:group-hover:bg-white/[0.05]

                    dark:group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.38)]

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  {/* Polished crystal face */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-[1px]

                      rounded-[22px]

                      bg-[linear-gradient(132deg,rgba(255,255,255,0.76),rgba(255,255,255,0.08)_35%,transparent_58%,rgba(91,113,255,0.02))]

                      dark:bg-[linear-gradient(132deg,rgba(255,255,255,0.045),rgba(255,255,255,0.008)_35%,transparent_58%,rgba(103,232,249,0.01))]
                    "
                  />

                  {/* Hover prism */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute
                      -left-[45%] top-0

                      h-full w-[35%]

                      skew-x-[-18deg]

                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-blue-200/20

                      opacity-0

                      transition-[left,opacity]
                      duration-700

                      group-hover:left-[115%]
                      group-hover:opacity-100

                      dark:via-white/[0.07]
                      dark:to-cyan-300/[0.025]

                      motion-reduce:hidden
                    "
                  />

                  {/* =================================================
                      NUMBER
                      1, 2, 3... exactly as requested.
                  ================================================= */}
                  <div
                    className="
                      relative z-10

                      flex h-[50px] w-[50px]
                      shrink-0
                      items-center justify-center
                    "
                  >
                    {/* Number depth */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-[7px]

                        translate-x-[3px]
                        translate-y-[4px]
                        rotate-45

                        rounded-[10px]

                        bg-blue-900/[0.07]

                        dark:bg-black/35
                      "
                    />

                    {/* Number crystal */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-[6px]

                        rotate-45

                        rounded-[10px]

                        border border-white

                        bg-gradient-to-br
                        from-white
                        via-blue-50/70
                        to-violet-100/45

                        shadow-[0_7px_17px_rgba(50,75,130,0.12),inset_1px_1px_1px_rgba(255,255,255,1)]

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

                  {/* Song title */}
                  <div className="relative z-10 min-w-0 flex-1">
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

                        group-hover:text-blue-600

                        sm:text-[17px]

                        dark:text-[#EDF0F5]
                        dark:group-hover:text-cyan-100
                      "
                    >
                      {song.title.trim()}
                    </h3>
                  </div>

                  {/* Open indicator */}
                  <div
                    className="
                      relative z-10

                      flex h-8 w-8
                      shrink-0
                      items-center justify-center

                      rounded-full

                      border border-white/80
                      bg-white/35

                      text-[#65728A]/35

                      shadow-[0_4px_12px_rgba(40,55,90,0.05),inset_0_1px_0_rgba(255,255,255,1)]

                      transition-all duration-300

                      group-hover:translate-x-0.5
                      group-hover:border-blue-200/70
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

                  {/* Gold micro edge */}
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

                      transition-all duration-500

                      group-hover:left-[15%]
                      group-hover:right-[15%]
                      group-hover:via-[#C3933C]/40

                      dark:group-hover:via-[#F0D078]/24
                    "
                  />
                </article>
              </Link>
            ))}
          </section>
        )}

        {/* ==========================================================
            FOOTER
        ========================================================== */}
        {filteredSongs.length > 0 && (
          <footer className="mt-14 flex flex-col items-center">
            <div
              aria-hidden="true"
              className="flex w-[180px] items-center gap-3"
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
        )}
      </div>
    </main>
  )
}