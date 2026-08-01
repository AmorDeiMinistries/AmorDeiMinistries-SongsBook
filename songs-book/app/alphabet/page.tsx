import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AlphabetPage() {
  const letters = [
    "అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ",
    "క", "ఖ", "గ", "ఘ", "ఙ",
    "చ", "ఛ", "జ", "ఝ", "ఞ",
    "ట", "ఠ", "డ", "ఢ", "ణ",
    "త", "థ", "ద", "ధ", "న",
    "ప", "ఫ", "బ", "భ", "మ",
    "య", "ర", "ల", "వ",
    "శ", "ష", "స", "హ",
    "ళ", "క్ష", "ఱ"
  ]

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
          CRYSTAL ENVIRONMENT
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          overflow-hidden
        "
      >
        {/* Sapphire atmosphere */}
        <div
          className="
            absolute
            -left-[240px] -top-[200px]

            h-[580px] w-[580px]
            rounded-full

            bg-blue-400/[0.18]
            blur-[145px]

            sm:h-[760px]
            sm:w-[760px]

            dark:bg-cyan-400/[0.055]
          "
        />

        {/* Violet refraction */}
        <div
          className="
            absolute
            -right-[270px] top-[14%]

            h-[560px] w-[560px]
            rounded-full

            bg-violet-400/[0.14]
            blur-[155px]

            dark:bg-violet-500/[0.055]
          "
        />

        {/* Champagne reflection */}
        <div
          className="
            absolute
            bottom-[-180px] left-[20%]

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
            left-1/2 top-[70px]

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
            BACK TO HOME
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
            COMPACT CRYSTAL HEADER
        ========================================================== */}
        <header
          className="
            relative isolate
            overflow-hidden

            rounded-[28px]

            border border-white/90
            bg-white/48

            px-5 py-7

            shadow-[0_28px_70px_rgba(38,54,90,0.09),0_8px_20px_rgba(38,54,90,0.04),inset_0_2px_1px_rgba(255,255,255,1)]

            backdrop-blur-[32px]

            sm:rounded-[34px]
            sm:px-8
            sm:py-9

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

          {/* Blue refraction */}
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

          {/* Violet refraction */}
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

          {/* Champagne light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              bottom-[-90px] left-1/2 -z-10

              h-40 w-64
              -translate-x-1/2

              rounded-full

              bg-amber-200/[0.09]
              blur-[65px]

              dark:bg-amber-300/[0.025]
            "
          />

          {/* Top specular highlight */}
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

          {/* Small collection mark */}
          <div
            aria-hidden="true"
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
                text-[14px] font-light
                tabular-nums

                text-[#536078]/40

                dark:text-white/28
              "
            >
              {letters.length}
            </span>
          </div>

          {/* Header content */}
          <div className="relative z-10 text-center">
            <h1
              className="
                text-[clamp(2.65rem,11vw,5.5rem)]
                font-semibold

                leading-[0.94]
                tracking-[-0.055em]

                text-[#202735]

                dark:text-[#F1F3F7]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Alphabet of{" "}

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
                Praise
              </span>
            </h1>

            <p
              className="
                mx-auto mt-3
                max-w-md

                text-[9px] font-semibold uppercase
                tracking-[0.22em]

                text-[#526078]/60

                sm:text-[10px]

                dark:text-[#DDE3ED]/45
              "
            >
              Find a song by its first Telugu letter
            </p>

            {/* Crystal ornament */}
            <div
              aria-hidden="true"
              className="
                mx-auto mt-5

                flex w-[165px]
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
            LETTER SECTION INTRO
        ========================================================== */}
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
            <p
              className="
                text-[7px] font-bold uppercase
                tracking-[0.28em]

                text-[#A07834]/65

                dark:text-[#F0D078]/42
              "
            >
              Telugu Alphabet
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
              Choose a letter
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
            Tap to explore
          </span>
        </div>

        {/* ==========================================================
            3D CRYSTAL LETTER GRID

            Mobile gets 4 columns for fast one-handed scanning.
            Each letter is an independent raised crystal key.
        ========================================================== */}
        <section
          aria-label="Telugu alphabet"
          className="
            grid

            grid-cols-4
            gap-2.5

            min-[420px]:gap-3

            sm:grid-cols-6
            sm:gap-4

            md:grid-cols-7

            lg:grid-cols-8
          "
        >
          {letters.map((letter) => (
            <Link
              key={letter}
              href={`/alphabet/${letter}`}
              aria-label={`Songs beginning with ${letter}`}
              className="
                group
                relative block

                rounded-[20px]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400/65
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#F7F9FD]

                dark:focus-visible:ring-cyan-300/50
                dark:focus-visible:ring-offset-[#090C13]
              "
            >
              {/* ====================================================
                  REAR PLATE
                  Creates the physical 3D depth.
              ==================================================== */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute

                  inset-x-[5px]
                  bottom-[-5px]
                  top-[8px]

                  rounded-[18px]

                  bg-gradient-to-b
                  from-[#C9D4E9]/45
                  via-[#BAC8DF]/30
                  to-[#A8B7D0]/24

                  shadow-[0_11px_20px_rgba(45,60,95,0.11)]

                  transition-all duration-300

                  group-hover:bottom-[-7px]
                  group-hover:translate-y-0.5

                  dark:from-white/[0.035]
                  dark:via-white/[0.018]
                  dark:to-black/25

                  dark:shadow-[0_13px_22px_rgba(0,0,0,0.35)]

                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />

              {/* ====================================================
                  MAIN CRYSTAL KEY
              ==================================================== */}
              <div
                className="
                  relative

                  flex
                  aspect-square
                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[20px]

                  border border-white/95
                  bg-white/55

                  shadow-[0_10px_25px_rgba(40,55,90,0.075),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-1px_0_rgba(70,90,140,0.06)]

                  backdrop-blur-[25px]

                  transition-[transform,border-color,background-color,box-shadow]
                  duration-400
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:-translate-y-1.5
                  group-hover:scale-[1.025]

                  group-hover:border-blue-300/55
                  group-hover:bg-white/78

                  group-hover:shadow-[0_18px_34px_rgba(50,75,135,0.15),0_4px_10px_rgba(50,75,135,0.06),inset_0_2px_1px_rgba(255,255,255,1)]

                  dark:border-white/[0.09]
                  dark:bg-white/[0.032]

                  dark:shadow-[0_12px_27px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.055)]

                  dark:group-hover:border-cyan-300/22
                  dark:group-hover:bg-white/[0.055]

                  dark:group-hover:shadow-[0_18px_38px_rgba(0,0,0,0.42),0_0_25px_rgba(80,210,240,0.035),inset_0_1px_0_rgba(255,255,255,0.075)]

                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                {/* Crystal polished face */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute inset-[1px]

                    rounded-[19px]

                    bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(255,255,255,0.10)_38%,transparent_60%,rgba(91,113,255,0.025))]

                    dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.008)_38%,transparent_60%,rgba(103,232,249,0.012))]
                  "
                />

                {/* Blue inner refraction */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    -left-[25%] -top-[25%]

                    h-[70%] w-[70%]

                    rounded-full

                    bg-blue-300/[0.10]
                    blur-[20px]

                    transition-colors duration-400

                    group-hover:bg-blue-300/[0.20]

                    dark:bg-cyan-300/[0.025]
                    dark:group-hover:bg-cyan-300/[0.07]

                    motion-reduce:transition-none
                  "
                />

                {/* Violet lower refraction */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    -bottom-[30%] -right-[20%]

                    h-[70%] w-[70%]

                    rounded-full

                    bg-violet-300/[0.09]
                    blur-[22px]

                    transition-colors duration-400

                    group-hover:bg-violet-300/[0.17]

                    dark:bg-violet-300/[0.025]
                    dark:group-hover:bg-violet-300/[0.06]

                    motion-reduce:transition-none
                  "
                />

                {/* Champagne center glint */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    bottom-[10%] left-1/2

                    h-5 w-10
                    -translate-x-1/2

                    rounded-full

                    bg-amber-200/[0.08]
                    blur-[14px]

                    opacity-0

                    transition-opacity duration-300

                    group-hover:opacity-100

                    dark:bg-amber-300/[0.045]

                    motion-reduce:transition-none
                  "
                />

                {/* Moving prism reflection */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute

                    -left-[80%] top-[-20%]

                    h-[140%] w-[38%]

                    rotate-[18deg]

                    bg-gradient-to-r
                    from-transparent
                    via-white/75
                    to-transparent

                    opacity-0

                    transition-[left,opacity]
                    duration-700
                    ease-out

                    group-hover:left-[135%]
                    group-hover:opacity-100

                    dark:via-white/[0.09]

                    motion-reduce:hidden
                  "
                />

                {/* Top crystal edge */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    left-[15%] right-[15%] top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent

                    dark:via-white/25
                  "
                />

                {/* ==================================================
                    TELUGU LETTER
                ================================================== */}
                <span
                  className="
                    relative z-10

                    text-[clamp(1rem,4.5vw,1.55rem)]
                    font-bold
                    leading-none

                    text-[#2E3748]

                    transition-[color,transform]
                    duration-300

                    group-hover:scale-[1.07]
                    group-hover:text-[#315DBB]

                    dark:text-[#E9EDF5]
                    dark:group-hover:text-cyan-200

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  {letter}
                </span>

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

                    transition-all duration-400

                    group-hover:left-[15%]
                    group-hover:right-[15%]
                    group-hover:via-[#C3933C]/45

                    dark:group-hover:via-[#F0D078]/25

                    motion-reduce:transition-none
                  "
                />
              </div>
            </Link>
          ))}
        </section>

        {/* ==========================================================
            END MARK
        ========================================================== */}
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
      </div>
    </main>
  )
}