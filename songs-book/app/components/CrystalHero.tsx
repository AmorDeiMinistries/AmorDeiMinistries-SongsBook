
"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"
import type { MouseEvent } from "react"

export default function CrystalHero() {
  const reduceMotion = useReducedMotion()

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const springX = useSpring(pointerX, {
    stiffness: 70,
    damping: 28,
    mass: 0.8,
  })

  const springY = useSpring(pointerY, {
    stiffness: 70,
    damping: 28,
    mass: 0.8,
  })

  const rotateY = useTransform(springX, [-1, 1], [-2.2, 2.2])
  const rotateX = useTransform(springY, [-1, 1], [1.8, -1.8])

  const reflectionX = useTransform(springX, [-1, 1], ["28%", "72%"])
  const reflectionY = useTransform(springY, [-1, 1], ["28%", "68%"])

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion) return

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    pointerX.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1
    )

    pointerY.set(
      ((event.clientY - rect.top) / rect.height) * 2 - 1
    )
  }

  function handlePointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
  aria-labelledby="crystal-title"
  onMouseMove={handlePointerMove}
  onMouseLeave={handlePointerLeave}
  className="
    relative mx-auto
    flex
    w-full max-w-[1450px]
    items-start justify-center
    overflow-hidden

    px-4
    pt-3 pb-8

    sm:px-6
    sm:pt-4 sm:pb-10

    md:pt-5 md:pb-12
  "
>
      {/* ============================================================ */}
      {/* AMBIENT CRYSTAL LIGHT                                       */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute left-[2%] top-[14%]
            h-72 w-72 rounded-full
            bg-blue-300/[0.16]
            blur-[100px]
            dark:bg-cyan-400/[0.11]
          "
        />

        <div
          className="
            absolute right-[2%] top-[17%]
            h-80 w-80 rounded-full
            bg-violet-300/[0.16]
            blur-[110px]
            dark:bg-violet-500/[0.14]
          "
        />

        <div
          className="
            absolute bottom-[5%] left-[35%]
            h-64 w-64 rounded-full
            bg-amber-200/[0.12]
            blur-[105px]
            dark:bg-amber-400/[0.07]
          "
        />

        <div
          className="
            absolute bottom-[20%] right-[18%]
            h-48 w-48 rounded-full
            bg-fuchsia-200/[0.08]
            blur-[90px]
            dark:bg-fuchsia-500/[0.055]
          "
        />
      </div>

      {/* ============================================================ */}
      {/* CRYSTAL CARD                                                */}
      {/* ============================================================ */}

      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 1300,
              }
        }
        className="
          relative w-full max-w-[1080px]
          overflow-hidden
          rounded-[36px]

          border border-white/90
          bg-white/45

          px-4 pt-7 pb-9
sm:px-10 sm:pt-8 sm:pb-10
md:px-16 md:pt-9 md:pb-11

          shadow-[0_35px_90px_rgba(40,55,90,0.10),0_8px_25px_rgba(40,55,90,0.04),inset_0_1px_0_rgba(255,255,255,1)]

          backdrop-blur-[32px]

          [transform-style:preserve-3d]

          dark:border-white/[0.12]
          dark:bg-white/[0.045]
          dark:shadow-[0_40px_110px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.10)]
        "
      >
        {/* Inner crystal bevel */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-[1px]
            rounded-[35px]

            bg-[linear-gradient(135deg,rgba(255,255,255,0.80),rgba(255,255,255,0.10)_30%,transparent_55%,rgba(100,120,255,0.025))]

            dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015)_30%,transparent_55%,rgba(100,220,255,0.025))]
          "
        />

        {/* Moving crystal reflection */}
        <motion.div
          aria-hidden="true"
          style={
            reduceMotion
              ? {
                  left: "50%",
                  top: "40%",
                }
              : {
                  left: reflectionX,
                  top: reflectionY,
                }
          }
          className="
            pointer-events-none absolute

            h-[300px] w-[300px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full

            bg-white/30
            blur-[70px]

            dark:bg-white/[0.025]
          "
        />

        {/* Top highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-[8%] right-[8%] top-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent

            dark:via-white/35
          "
        />

        {/* Bottom refracted edge */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-0 left-[18%] right-[18%]
            h-px

            bg-gradient-to-r
            from-transparent
            via-violet-300/50
            to-transparent

            dark:via-cyan-300/25
          "
        />

        {/* Internal blue light */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -left-24 top-[18%]

            h-72 w-72 rounded-full

            bg-blue-300/[0.11]
            blur-[90px]

            dark:bg-cyan-400/[0.07]
          "
        />

        {/* Internal violet light */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-24 top-[15%]

            h-72 w-72 rounded-full

            bg-violet-300/[0.12]
            blur-[90px]

            dark:bg-violet-500/[0.09]
          "
        />

        {/* ========================================================== */}
        {/* TITLE STAGE                                                */}
        {/* ========================================================== */}

        <div
          className="
  relative z-10
  mx-auto

  flex
  min-h-[170px]
  max-w-[950px]
  items-start
  justify-center

  pt-5

  sm:min-h-[190px]
  sm:pt-6
"
        >
          {/* Faint engraved guide */}
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.15, 0.11, 0],
              }}
              transition={{
                duration: 1.6,
                times: [0, 0.25, 0.72, 1],
              }}
              className="
                pointer-events-none
                absolute inset-0
                flex items-center justify-center
              "
            >
              <span
                className="
                  whitespace-nowrap

                  text-[clamp(3.7rem,15vw,9.6rem)]
                  font-semibold uppercase
                  leading-[0.78]
                  tracking-[-0.055em]

                  text-[#2B3446]

                  [-webkit-text-stroke:1px_rgba(43,52,70,0.18)]

                  dark:text-white
                  dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.12)]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                Amor Dei
              </span>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* ENGRAVING BEAM                                          */}
          {/* ======================================================== */}

          {!reduceMotion && (
            <>
              <motion.div
                aria-hidden="true"
                initial={{
                  x: "-140%",
                  opacity: 0,
                }}
                animate={{
                  x: ["-140%", "-140%", "140%", "140%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.65,
                  times: [0, 0.08, 0.86, 1],
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="
                  pointer-events-none
                  absolute left-1/2 top-[46%]
                  z-30

                  h-[3px] w-[48%]

                  -translate-x-1/2 -translate-y-1/2

                  bg-gradient-to-r
                  from-transparent
                  via-[#D6A94E]
                  to-transparent

                  shadow-[0_0_8px_rgba(214,169,78,0.38),0_0_24px_rgba(96,145,255,0.20)]

                  dark:via-[#F7DA83]
                  dark:shadow-[0_0_9px_rgba(247,218,131,0.55),0_0_30px_rgba(103,232,249,0.18)]
                "
              />

              <motion.div
                aria-hidden="true"
                initial={{
                  x: "-140%",
                  opacity: 0,
                }}
                animate={{
                  x: ["-140%", "-140%", "140%", "140%"],
                  opacity: [0, 0.38, 0.38, 0],
                }}
                transition={{
                  duration: 1.65,
                  times: [0, 0.08, 0.86, 1],
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="
                  pointer-events-none
                  absolute left-1/2 top-[46%]
                  z-20

                  h-16 w-[40%]

                  -translate-x-1/2 -translate-y-1/2
                  rounded-full

                  bg-gradient-to-r
                  from-transparent
                  via-blue-300/45
                  to-transparent

                  blur-[20px]

                  dark:via-cyan-300/25
                "
              />
            </>
          )}

          {/* ======================================================== */}
          {/* AMOR DEI                                                */}
          {/* ======================================================== */}

          <div className="relative z-20 text-center">
            <motion.h1
              id="crystal-title"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      clipPath: "inset(0 100% 0 0)",
                      filter: "blur(4px)",
                    }
              }
              animate={{
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                filter: "blur(0px)",
              }}
              transition={{
                opacity: {
                  duration: reduceMotion ? 0 : 0.2,
                  delay: reduceMotion ? 0 : 0.42,
                },

                clipPath: {
                  duration: reduceMotion ? 0 : 1.25,
                  delay: reduceMotion ? 0 : 0.3,
                  ease: [0.65, 0, 0.35, 1],
                },

                filter: {
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.42,
                },
              }}
              className="
                whitespace-nowrap

                text-[clamp(3.7rem,15vw,9.6rem)]
                font-semibold uppercase
                leading-[0.78]
                tracking-[-0.055em]

                bg-gradient-to-b
                from-[#171E2C]
                via-[#354058]
                to-[#111722]

                bg-clip-text
                text-transparent

                drop-shadow-[0_2px_0_rgba(255,255,255,0.85)]

                dark:bg-gradient-to-b
                dark:from-white
                dark:via-[#F1F3F8]
                dark:to-[#AAB4C9]

                dark:drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Amor Dei
            </motion.h1>

            {/* Prism sweep */}
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                initial={{
                  x: "-190%",
                  opacity: 0,
                }}
                animate={{
                  x: ["-190%", "-190%", "190%", "190%"],
                  opacity: [0, 0.85, 0.85, 0],
                }}
                transition={{
                  duration: 1.15,
                  delay: 1.22,
                  times: [0, 0.08, 0.9, 1],
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute left-1/2 top-[28%]

                  h-[105%] w-14

                  -translate-x-1/2 -translate-y-1/2
                  rotate-[18deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/80
                  to-transparent

                  blur-[5px]
                  mix-blend-screen

                  dark:via-cyan-100/35
                "
              />
            )}

            {/* ====================================================== */}
            {/* MINISTRIES — darker and deliberately spacious         */}
            {/* ====================================================== */}

            <motion.div
  initial={
    reduceMotion
      ? false
      : {
          opacity: 0,
          y: 8,
          scaleX: 0.82,
        }
  }
  animate={{
    opacity: 1,
    y: 0,
    scaleX: 1,
  }}
  transition={{
    duration: reduceMotion ? 0 : 0.9,
    delay: reduceMotion ? 0 : 1.65,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    mx-auto mt-7

    flex
    w-[78%]
    max-w-[610px]
    items-center
    justify-between

    px-1

    text-[9px]
    font-bold
    uppercase

    text-[#202633]

    sm:w-[74%]
    sm:text-[10px]

    md:w-[70%]
    md:max-w-[650px]
    md:text-[11px]

    dark:text-[#F0F2F7]
  "
  aria-label="Ministries"
>
  {"MINISTRIES".split("").map((letter, index) => (
    <span key={index}>{letter}</span>
  ))}
</motion.div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* CRYSTAL DIVIDER                                            */}
        {/* ========================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scaleX: 0,
                }
          }
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 2.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative z-20

            mx-auto mt-1
            flex w-full max-w-[300px]
            items-center gap-4

            sm:max-w-[360px]
          "
        >
          <span
            className="
              h-px flex-1

              bg-gradient-to-r
              from-transparent
              via-blue-500/55
              to-[#B8872E]/60

              dark:via-cyan-300/45
              dark:to-[#F6D77A]/55
            "
          />

          <motion.span
            initial={
              reduceMotion
                ? false
                : {
                    rotate: 0,
                    scale: 0,
                  }
            }
            animate={{
              rotate: 45,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 2.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              block h-2 w-2

              border border-[#A97825]
              bg-[#E6C878]

              shadow-[0_0_12px_rgba(199,154,67,0.25)]

              dark:border-[#F6D77A]
              dark:bg-[#F6D77A]/30
              dark:shadow-[0_0_14px_rgba(246,215,122,0.32)]
            "
          />

          <span
            className="
              h-px flex-1

              bg-gradient-to-l
              from-transparent
              via-violet-500/55
              to-[#B8872E]/60

              dark:via-violet-300/45
              dark:to-[#F6D77A]/55
            "
          />
        </motion.div>

        
        {/* ========================================================== */}
        {/* FINAL STATEMENT — now clearly readable                    */}
        {/* ========================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 2.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative z-20

            mx-auto mt-8
            flex max-w-[620px]
            flex-wrap items-center justify-center

            gap-x-3 gap-y-2

            px-2

            text-center
            text-[9px] font-semibold uppercase
            tracking-[0.18em]

            text-[#525A6B]

            sm:gap-x-5
            sm:text-[10px]
            sm:tracking-[0.23em]

            dark:text-[#BFC7D5]
          "
        >
          <span>Sing Joyfully</span>

          <span
            aria-hidden="true"
            className="
              h-1 w-1 rotate-45

              bg-blue-600/70

              shadow-[0_0_7px_rgba(96,130,230,0.18)]

              dark:bg-cyan-300/70
            "
          />

          <span>In Unison</span>

          <span
            aria-hidden="true"
            className="
              h-1 w-1 rotate-45

              bg-violet-600/70

              shadow-[0_0_7px_rgba(140,100,220,0.18)]

              dark:bg-violet-300/70
            "
          />

          <span>From the Heart</span>
        </motion.div>

        {/* ========================================================== */}
        {/* FINAL CRYSTAL GLINT                                        */}
        {/* ========================================================== */}

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 1.8],
            }}
            transition={{
              duration: 0.85,
              delay: 3.25,
              ease: "easeOut",
            }}
            className="
              pointer-events-none

              relative z-20
              mx-auto mt-5

              h-1.5 w-1.5
              rotate-45

              bg-[#C69235]

              shadow-[0_0_16px_rgba(213,169,78,0.48)]

              dark:bg-[#F6D77A]
              dark:shadow-[0_0_20px_rgba(246,215,122,0.55)]
            "
          />
        )}

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            initial={{
              opacity: 0,
              scaleX: 0.5,
            }}
            animate={{
              opacity: [0, 0.3, 0.1],
              scaleX: [0.5, 1, 0.85],
            }}
            transition={{
              duration: 2,
              delay: 3.15,
              ease: "easeOut",
            }}
            className="
              pointer-events-none

              relative z-10
              mx-auto mt-3

              h-px w-28

              bg-gradient-to-r
              from-transparent
              via-[#C69235]/65
              to-transparent

              dark:via-[#F6D77A]/45
            "
          />
        )}

        {/* ========================================================== */}
{/* SCRIPTURE — integrated into the crystal monument           */}
{/* ========================================================== */}

<motion.div
  initial={
    reduceMotion
      ? false
      : {
          opacity: 0,
          y: 14,
          filter: "blur(3px)",
        }
  }
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: reduceMotion ? 0 : 0.9,
    delay: reduceMotion ? 0 : 3.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative z-20
    mx-auto
    -mt-4
    max-w-[720px]
  "
>
  {/* Crystal separator */}
  <div
    aria-hidden="true"
    className="
      mx-auto mb-5
      h-px w-full max-w-[520px]

      bg-gradient-to-r
      from-transparent
      via-[#67738A]/20
      to-transparent

      dark:via-white/15
    "
  />

  <div className="text-center">
    {/* Small scripture label */}
    <div className="mb-4 flex items-center justify-center gap-2">
      <span
        aria-hidden="true"
        className="
          h-1.5 w-1.5 rotate-45
          bg-[#C69235]

          shadow-[0_0_8px_rgba(198,146,53,0.25)]

          dark:bg-[#F6D77A]
          dark:shadow-[0_0_10px_rgba(246,215,122,0.3)]
        "
      />

      <span
        className="
          text-[9px] font-bold uppercase
          tracking-[0.28em]

          text-[#8A6426]

          dark:text-[#F6D77A]/80
        "
      >
        John 4:24
      </span>
    </div>

    {/* Verse */}
    <blockquote
      className="
        mx-auto max-w-[650px]

        text-[20px] font-semibold
        leading-[1.55]
        tracking-[-0.015em]

        text-[#252B38]

        sm:text-[20px]
        sm:leading-[1.5]

        md:text-[21px]

        dark:text-[#ECEEF4]
      "
      style={{
        fontFamily: "var(--font-display)",
      }}
    >
      “GOD IS SPIRIT, and those who worship him must WORSHIP in{" "}
      <span
        className="
          bg-gradient-to-r
          from-[#3159B7]
          via-[#6D4BC3]
          to-[#A67528]

          bg-clip-text
          text-transparent

          dark:from-[#75DCEB]
          dark:via-[#BCAAF5]
          dark:to-[#F6D77A]
        "
      >
        SPIRIT and TRUTH.
      </span>
      ”
    </blockquote>
  </div>
</motion.div>
      </motion.div>
    </section>
  )
}
