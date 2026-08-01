import Link from "next/link"
import {
  ArrowLeft,
  ChevronRight,
  Music2,
} from "lucide-react"

import { fetchSongs, type Song } from "@/lib/api"

export default async function AllSongsPage() {
  const songs: Song[] = await fetchSongs()

  return (
    <main
      className="
        relative min-h-screen overflow-x-hidden
        bg-[#F6F8FD]
        text-[#202735]

        dark:bg-[#080B12]
        dark:text-[#F1F3F7]
      "
    >
      {/* ============================================================
          3D CRYSTAL ENVIRONMENT
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          overflow-hidden
        "
      >
        {/* Blue atmospheric light */}
        <div
          className="
            absolute
            -left-[240px] -top-[180px]

            h-[600px] w-[600px]
            rounded-full

            bg-blue-400/[0.18]
            blur-[150px]

            sm:h-[760px]
            sm:w-[760px]

            dark:bg-cyan-400/[0.055]
          "
        />

        {/* Violet atmospheric light */}
        <div
          className="
            absolute
            -right-[270px] top-[12%]

            h-[600px] w-[600px]
            rounded-full

            bg-violet-400/[0.14]
            blur-[160px]

            dark:bg-violet-500/[0.055]
          "
        />

        {/* Gold reflected light */}
        <div
          className="
            absolute
            bottom-[-180px] left-[20%]

            h-[520px] w-[520px]
            rounded-full

            bg-amber-300/[0.08]
            blur-[150px]

            dark:bg-amber-300/[0.02]
          "
        />

        {/* Soft crystal grid */}
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

        {/* Central illumination */}
        <div
          className="
            absolute
            left-1/2 top-[100px]

            h-[500px] w-[90%]
            -translate-x-1/2

            rounded-full

            bg-white/50
            blur-[130px]

            dark:bg-white/[0.012]
          "
        />
      </div>

      {/* ============================================================
          PAGE
      ============================================================ */}
      <div
        className="
          relative z-10
          mx-auto

          w-full max-w-5xl

          px-4
          pb-24
          pt-4

          sm:px-6
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

              border border-white/80
              bg-white/50

              px-3.5 py-2

              text-[8px] font-bold uppercase
              tracking-[0.2em]

              text-[#526077]/60

              shadow-[
                0_7px_22px_rgba(40,55,90,0.04),
                inset_0_1px_0_rgba(255,255,255,1)
              ]

              backdrop-blur-xl

              transition-all duration-300

              hover:-translate-y-0.5
              hover:border-blue-300/45
              hover:bg-white/80
              hover:text-blue-600

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F6F8FD]

              dark:border-white/[0.08]
              dark:bg-white/[0.03]
              dark:text-white/40

              dark:hover:border-cyan-300/20
              dark:hover:bg-white/[0.05]
              dark:hover:text-cyan-200

              dark:focus-visible:ring-cyan-300/45
              dark:focus-visible:ring-offset-[#080B12]

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
            3D CRYSTAL HEADER
        ========================================================== */}
        <header
          className="
            relative
            isolate

            overflow-hidden

            rounded-[28px]

            border border-white/90
            bg-white/48

            px-5 py-8

            shadow-[
              0_28px_70px_rgba(38,54,90,0.10),
              0_8px_20px_rgba(38,54,90,0.05),
              inset_0_2px_1px_rgba(255,255,255,1),
              inset_0_-1px_0_rgba(80,100,150,0.05)
            ]

            backdrop-blur-[32px]

            sm:rounded-[34px]
            sm:px-8
            sm:py-10

            dark:border-white/[0.10]
            dark:bg-white/[0.035]

            dark:shadow-[
              0_30px_80px_rgba(0,0,0,0.38),
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

              rounded-[27px]

              bg-[
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.88),
                  rgba(255,255,255,0.15)_35%,
                  transparent_60%,
                  rgba(99,102,241,0.025)
                )
              ]

              sm:rounded-[33px]

              dark:bg-[
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.06),
                  rgba(255,255,255,0.01)_35%,
                  transparent_60%,
                  rgba(103,232,249,0.012)
                )
              ]
            "
          />

          {/* Sapphire refraction */}
          <div
            aria-hidden="true"
            className="
              absolute
              -left-16 -top-20 -z-10

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
              absolute
              -bottom-24 -right-14 -z-10

              h-64 w-64
              rounded-full

              bg-violet-300/[0.15]
              blur-[80px]

              dark:bg-violet-400/[0.055]
            "
          />

          {/* Warm refraction */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-80px] left-[38%] -z-10

              h-40 w-56
              rounded-full

              bg-amber-200/[0.10]
              blur-[65px]

              dark:bg-amber-300/[0.025]
            "
          />

          {/* Glass top highlight */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[12%] right-[12%] top-0

              h-[1px]

              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent

              dark:via-white/30
            "
          />

          {/* ========================================================
              COLLECTION COUNT
          ======================================================== */}
          <div
            aria-label={`${songs.length} songs`}
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

                border border-[#647598]/20

                bg-gradient-to-br
                from-blue-300/25
                via-white/60
                to-violet-300/25

                shadow-[0_0_10px_rgba(70,100,180,0.10)]

                dark:border-white/12
                dark:from-cyan-300/10
                dark:via-white/10
                dark:to-violet-300/10
              "
            />

            <span
              className="
                text-[15px] font-light
                tabular-nums
                tracking-[0.08em]

                text-[#536078]/38

                sm:text-[17px]

                dark:text-white/25
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
                tracking-[0.25em]

                text-[#667085]/27

                dark:text-white/16
              "
            >
              Songs
            </span>
          </div>

          {/* ========================================================
              HEADER TITLE
          ======================================================== */}
          <div className="relative z-10 text-center">
            <h1
              className="
                text-[clamp(2.6rem,11vw,5.5rem)]
                font-semibold

                leading-[0.9]
                tracking-[-0.055em]

                text-[#202735]

                dark:text-[#F1F3F7]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Songs of{" "}

              <span
                className="
                  italic

                  bg-gradient-to-r
                  from-[#315DBB]
                  via-[#6856C8]
                  to-[#A8782D]

                  bg-clip-text
                  text-transparent

                  dark:from-[#78E1ED]
                  dark:via-[#B8A8F5]
                  dark:to-[#F2D27B]
                "
              >
                Praise
              </span>
            </h1>

            <p
  className="
    mt-3

    text-[8px] font-bold uppercase
    tracking-[0.32em]

    text-[#4F5D73]/75

    sm:text-[9px]

    dark:text-[#D9DFEA]/65
  "
>
  Complete Collection
</p>

            {/* Crystal signature */}
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
                  via-blue-400/30
                  to-[#B99345]/35

                  dark:via-cyan-300/20
                  dark:to-[#E9CC7B]/20
                "
              />

              <span
                className="
                  h-[7px] w-[7px]
                  rotate-45

                  border border-[#B58A39]/60

                  bg-white/50

                  shadow-[0_0_10px_rgba(190,145,55,0.14)]

                  dark:border-[#F2D27B]/45
                  dark:bg-white/[0.025]
                "
              />

              <span
                className="
                  h-px flex-1

                  bg-gradient-to-l
                  from-transparent
                  via-violet-400/28
                  to-[#B99345]/35

                  dark:via-violet-300/18
                  dark:to-[#E9CC7B]/20
                "
              />
            </div>
          </div>
        </header>

        {/* ==========================================================
            SONG SECTION INTRO
        ========================================================== */}
        {songs.length > 0 && (
          <div
            className="
              mb-4 mt-8

              flex items-center gap-4

              px-1

              sm:mb-5
              sm:mt-10
            "
          >
            <div>
              <p
                className="
                  text-[7px] font-bold uppercase
                  tracking-[0.28em]

                  text-[#A07834]/55

                  dark:text-[#F1D078]/35
                "
              >
                Complete Songbook
              </p>

              <h2
                className="
                  mt-1.5

                  text-[22px] font-semibold
                  tracking-[-0.035em]

                  text-[#28303E]

                  sm:text-[26px]

                  dark:text-[#ECEFF4]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                Choose your song
              </h2>
            </div>

            <div
              aria-hidden="true"
              className="
                h-px flex-1

                bg-gradient-to-r
                from-[#6A7890]/10
                to-transparent

                dark:from-white/[0.06]
              "
            />
          </div>
        )}

        {/* ==========================================================
            3D CRYSTAL SONG CARDS
        ========================================================== */}
        {songs.length > 0 && (
          <section
            aria-label="Complete song collection"
            className="
              grid grid-cols-1
              gap-3

              sm:gap-4

              lg:grid-cols-2
              lg:gap-5
            "
          >
            {songs.map((song, index) => (
              <Link
                key={song.id}
                href={`/song/${song.slug}`}
                prefetch={false}
                className="
                  group

                  relative block

                  rounded-[24px]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400/60
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F6F8FD]

                  dark:focus-visible:ring-cyan-300/45
                  dark:focus-visible:ring-offset-[#080B12]
                "
              >
                {/* ==================================================
                    3D SHADOW PLATE

                    This separate layer creates the physical thickness.
                ================================================== */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    inset-x-[7px]
                    bottom-[-5px]
                    top-[10px]

                    rounded-[22px]

                    bg-gradient-to-b
                    from-[#CAD5EA]/25
                    to-[#A9B8D3]/18

                    shadow-[0_14px_25px_rgba(42,58,92,0.10)]

                    transition-all
                    duration-500

                    group-hover:bottom-[-8px]
                    group-hover:translate-y-1
                    group-hover:shadow-[0_20px_35px_rgba(42,58,92,0.14)]

                    dark:from-white/[0.025]
                    dark:to-black/20

                    dark:shadow-[0_18px_30px_rgba(0,0,0,0.28)]

                    dark:group-hover:shadow-[0_24px_42px_rgba(0,0,0,0.38)]

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                />

                {/* ==================================================
                    MAIN CRYSTAL SLAB
                ================================================== */}
                <article
                  className="
                    relative

                    flex min-h-[96px]
                    items-center

                    overflow-hidden

                    rounded-[24px]

                    border border-white/90

                    bg-white/52

                    px-3.5 py-3.5

                    shadow-[
                      0_12px_32px_rgba(40,55,90,0.075),
                      inset_0_2px_1px_rgba(255,255,255,1),
                      inset_0_-1px_0_rgba(60,80,130,0.045)
                    ]

                    backdrop-blur-[28px]

                    transition-[
                      transform,
                      border-color,
                      background-color,
                      box-shadow
                    ]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:-translate-y-1.5

                    group-hover:border-blue-300/45
                    group-hover:bg-white/70

                    group-hover:shadow-[
                      0_22px_45px_rgba(40,65,120,0.13),
                      inset_0_2px_1px_rgba(255,255,255,1),
                      inset_0_-1px_0_rgba(80,110,180,0.06)
                    ]

                    sm:min-h-[106px]
                    sm:px-4
                    sm:py-4

                    dark:border-white/[0.085]
                    dark:bg-white/[0.03]

                    dark:shadow-[
                      0_14px_35px_rgba(0,0,0,0.26),
                      inset_0_1px_0_rgba(255,255,255,0.055)
                    ]

                    dark:group-hover:border-cyan-300/20
                    dark:group-hover:bg-white/[0.05]

                    dark:group-hover:shadow-[
                      0_24px_48px_rgba(0,0,0,0.38),
                      0_0_30px_rgba(70,200,230,0.025),
                      inset_0_1px_0_rgba(255,255,255,0.075)
                    ]

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  {/* =================================================
                      INNER FACET
                  ================================================= */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute inset-[1px]

                      rounded-[23px]

                      bg-[
                        linear-gradient(
                          132deg,
                          rgba(255,255,255,0.75),
                          rgba(255,255,255,0.08)_34%,
                          transparent_57%,
                          rgba(91,113,255,0.025)_78%,
                          rgba(200,150,60,0.02)
                        )
                      ]

                      dark:bg-[
                        linear-gradient(
                          132deg,
                          rgba(255,255,255,0.045),
                          rgba(255,255,255,0.008)_34%,
                          transparent_57%,
                          rgba(103,232,249,0.01)_78%,
                          rgba(230,190,80,0.008)
                        )
                      ]
                    "
                  />

                  {/* Blue refraction inside card */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute
                      -left-14 -top-14

                      h-32 w-32
                      rounded-full

                      bg-blue-300/[0.10]
                      blur-[45px]

                      transition-opacity duration-500

                      group-hover:bg-blue-300/[0.16]

                      dark:bg-cyan-300/[0.025]
                      dark:group-hover:bg-cyan-300/[0.045]

                      motion-reduce:transition-none
                    "
                  />

                  {/* Violet refraction inside card */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute
                      -bottom-16 right-[10%]

                      h-32 w-32
                      rounded-full

                      bg-violet-300/[0.08]
                      blur-[45px]

                      transition-opacity duration-500

                      group-hover:bg-violet-300/[0.13]

                      dark:bg-violet-300/[0.02]
                      dark:group-hover:bg-violet-300/[0.04]

                      motion-reduce:transition-none
                    "
                  />

                  {/* =================================================
                      PRISM SWEEP
                  ================================================= */}
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
                      via-white/65
                      to-blue-200/20

                      opacity-0

                      transition-[left,opacity]
                      duration-700
                      ease-out

                      group-hover:left-[115%]
                      group-hover:opacity-100

                      dark:via-white/[0.07]
                      dark:to-cyan-300/[0.025]

                      motion-reduce:hidden
                    "
                  />

                  {/* =================================================
                      TOP SPECULAR EDGE
                  ================================================= */}
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

                      opacity-80

                      dark:via-white/25
                    "
                  />

                  {/* =================================================
                      NUMBER CRYSTAL

                      1, 2, 3... clearly visible.
                  ================================================= */}
                  <div
                    className="
                      relative z-10

                      mr-4

                      flex h-[58px] w-[58px]
                      shrink-0

                      items-center
                      justify-center

                      sm:mr-5
                      sm:h-[64px]
                      sm:w-[64px]
                    "
                  >
                    {/* Deep number shadow */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[8px]

                        translate-x-[3px]
                        translate-y-[5px]
                        rotate-45

                        rounded-[12px]

                        bg-blue-900/[0.07]

                        blur-[1px]

                        transition-transform
                        duration-500

                        group-hover:translate-x-[4px]
                        group-hover:translate-y-[7px]

                        dark:bg-black/35

                        motion-reduce:transform-none
                      "
                    />

                    {/* Number crystal face */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[7px]

                        rotate-45

                        rounded-[12px]

                        border border-white/90

                        bg-gradient-to-br
                        from-white/90
                        via-blue-50/55
                        to-violet-100/35

                        shadow-[
                          0_8px_18px_rgba(50,75,130,0.12),
                          inset_2px_2px_2px_rgba(255,255,255,1),
                          inset_-1px_-1px_1px_rgba(80,100,160,0.08)
                        ]

                        transition-all
                        duration-500

                        group-hover:rotate-[135deg]

                        group-hover:border-blue-200/90

                        group-hover:shadow-[
                          0_12px_25px_rgba(60,95,175,0.18),
                          0_0_18px_rgba(100,150,255,0.10),
                          inset_2px_2px_2px_rgba(255,255,255,1)
                        ]

                        dark:border-white/[0.10]

                        dark:bg-gradient-to-br
                        dark:from-white/[0.07]
                        dark:via-cyan-300/[0.025]
                        dark:to-violet-300/[0.035]

                        dark:shadow-[
                          0_9px_20px_rgba(0,0,0,0.35),
                          inset_1px_1px_0_rgba(255,255,255,0.07)
                        ]

                        dark:group-hover:border-cyan-300/25

                        dark:group-hover:shadow-[
                          0_12px_28px_rgba(0,0,0,0.40),
                          0_0_20px_rgba(103,232,249,0.07),
                          inset_1px_1px_0_rgba(255,255,255,0.09)
                        ]

                        motion-reduce:transform-none
                        motion-reduce:transition-none
                      "
                    />

                    {/* Clearly visible number */}
                    <span
                      className="
                        relative z-10

                        text-[18px] font-semibold
                        leading-none

                        tabular-nums

                        text-[#3C5279]

                        transition-colors
                        duration-300

                        group-hover:text-[#285FC5]

                        sm:text-[20px]

                        dark:text-white/58
                        dark:group-hover:text-cyan-200

                        motion-reduce:transition-none
                      "
                      style={{
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* =================================================
                      SONG TITLE
                  ================================================= */}
                  <div
                    className="
                      relative z-10

                      min-w-0 flex-1
                    "
                  >
                    {/* Tiny decorative line */}
                    <div
                      aria-hidden="true"
                      className="
                        mb-2

                        h-px w-6

                        bg-gradient-to-r
                        from-[#B68B3D]/45
                        to-transparent

                        transition-[width]
                        duration-400

                        group-hover:w-10

                        dark:from-[#F0D078]/30

                        motion-reduce:transition-none
                      "
                    />

                    <h3
                      className="
                        text-[17px] font-semibold

                        leading-[1.5]
                        tracking-[-0.012em]

                        text-[#242D3B]

                        transition-colors
                        duration-300

                        group-hover:text-[#285FC5]

                        sm:text-[17px]

                        dark:text-[#EDF0F5]
                        dark:group-hover:text-cyan-100

                        motion-reduce:transition-none
                      "
                    >
                      {song.title}
                    </h3>
                  </div>

                  {/* =================================================
                      3D ACTION BUTTON
                  ================================================= */}
                  <div
                    className="
                      relative z-10

                      ml-2

                      flex h-9 w-9
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border border-white/75
                      bg-white/38

                      text-[#65728A]/35

                      shadow-[
                        0_5px_12px_rgba(40,55,90,0.06),
                        inset_0_1px_0_rgba(255,255,255,0.95)
                      ]

                      transition-all
                      duration-300

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5

                      group-hover:border-blue-200/70
                      group-hover:bg-blue-50/65
                      group-hover:text-blue-600

                      group-hover:shadow-[
                        0_8px_18px_rgba(55,90,160,0.11),
                        inset_0_1px_0_rgba(255,255,255,1)
                      ]

                      dark:border-white/[0.07]
                      dark:bg-white/[0.025]
                      dark:text-white/22

                      dark:shadow-[
                        0_5px_14px_rgba(0,0,0,0.22),
                        inset_0_1px_0_rgba(255,255,255,0.035)
                      ]

                      dark:group-hover:border-cyan-300/18
                      dark:group-hover:bg-cyan-300/[0.035]
                      dark:group-hover:text-cyan-200

                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    <ChevronRight
                      size={14}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* =================================================
                      GOLD BOTTOM REFLECTION
                  ================================================= */}
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

                      transition-all
                      duration-500

                      group-hover:left-[15%]
                      group-hover:right-[15%]
                      group-hover:via-[#C3933C]/40

                      dark:group-hover:via-[#F0D078]/25

                      motion-reduce:transition-none
                    "
                  />
                </article>
              </Link>
            ))}
          </section>
        )}

        {/* ==========================================================
            EMPTY STATE
        ========================================================== */}
        {songs.length === 0 && (
          <section
            className="
              relative
              mt-8

              overflow-hidden

              rounded-[28px]

              border border-white/85
              bg-white/48

              px-6 py-16

              text-center

              shadow-[
                0_24px_65px_rgba(40,55,90,0.08),
                inset_0_1px_0_rgba(255,255,255,1)
              ]

              backdrop-blur-[28px]

              dark:border-white/[0.08]
              dark:bg-white/[0.03]

              dark:shadow-[
                0_26px_70px_rgba(0,0,0,0.30),
                inset_0_1px_0_rgba(255,255,255,0.05)
              ]
            "
          >
            <div
              className="
                relative

                mx-auto mb-6

                flex h-14 w-14
                items-center justify-center
              "
            >
              <div
                className="
                  absolute inset-1

                  rotate-45

                  rounded-[14px]

                  border border-blue-200/60

                  bg-gradient-to-br
                  from-white
                  via-blue-50/60
                  to-violet-100/35

                  shadow-[
                    0_10px_24px_rgba(50,75,130,0.10),
                    inset_1px_1px_0_rgba(255,255,255,1)
                  ]

                  dark:border-cyan-300/12
                  dark:from-white/[0.06]
                  dark:via-cyan-300/[0.02]
                  dark:to-violet-300/[0.025]
                "
              />

              <Music2
                size={20}
                strokeWidth={1.5}
                className="
                  relative z-10

                  text-blue-600/65

                  dark:text-cyan-300/65
                "
              />
            </div>

            <h2
              className="
                text-[26px] font-semibold
                tracking-[-0.035em]

                text-[#252D3A]

                dark:text-[#EEF1F5]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              The treasury is waiting
            </h2>

            <p
              className="
                mx-auto mt-2
                max-w-sm

                text-[12px]
                leading-6

                text-[#667085]/50

                dark:text-white/30
              "
            >
              Songs added to the collection will appear here.
            </p>
          </section>
        )}

        {/* ==========================================================
            FOOTER
        ========================================================== */}
        {songs.length > 0 && (
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
                flex w-full max-w-[200px]
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

                  bg-white/25

                  shadow-[0_0_8px_rgba(182,139,61,0.10)]

                  dark:border-[#F0D078]/35
                  dark:bg-white/[0.02]
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

                text-[#667085]/25

                dark:text-white/15
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