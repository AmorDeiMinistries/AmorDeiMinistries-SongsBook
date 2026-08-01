import Link from "next/link"
import { Playfair_Display, Caveat, Lora } from "next/font/google"
import { Music, ListOrdered, Layers, Bookmark } from "lucide-react"
import { fetchSongs } from "@/lib/api"
import HomeSearch from "./components/HomeSearch"

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
})

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
})

// A torn-paper silhouette reused by every "pinned note" element
const TORN_EDGE =
  "polygon(0% 3%, 4% 0%, 10% 4%, 18% 1%, 27% 3%, 35% 0%, 44% 4%, 53% 1%, 61% 4%, 70% 0%, 79% 3%, 88% 0%, 96% 4%, 100% 1%, 100% 96%, 95% 100%, 87% 97%, 78% 100%, 69% 96%, 60% 100%, 51% 97%, 42% 100%, 33% 96%, 24% 100%, 15% 97%, 7% 100%, 0% 96%)"

function WashiTape({ color, style }: { color: string; style?: React.CSSProperties }) {
  return (
    <span
      className="absolute h-6 w-16"
      style={{
        backgroundColor: color,
        opacity: 0.62,
        clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
        ...style,
      }}
    >
      <span
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 2px, transparent 2px, transparent 7px)",
        }}
      />
    </span>
  )
}

function EighthNotes({ size = 44, color = "#2A2521" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 60 54" fill="none">
      <path d="M14 40 C14 45.5 9.5 48 6 46.5 C2.5 45 3 39.5 8 38.5 C10.5 38 12.5 38.7 14 40Z" fill={color} />
      <path d="M40 34 C40 39.5 35.5 42 32 40.5 C28.5 39 29 33.5 34 32.5 C36.5 32 38.5 32.7 40 34Z" fill={color} />
      <path d="M14 40 V10 L40 4 V34" stroke={color} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M14 15 L40 9" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function WavyUnderline({ color = "#A9812F" }: { color?: string }) {
  return (
    <svg
      className="absolute -bottom-2 left-0 h-3 w-full"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
    >
      <path
        d="M0,6 Q12,1 24,6 T48,6 T72,6 T96,6 T120,6 T144,6 T168,6 T192,6 T200,6"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default async function HomePage() {
  const songs = await fetchSongs()

  const categories = [
    {
      title: "Songs of Praise",
      aside: "the whole book",
      href: "/all",
      icon: <Music size={19} strokeWidth={1.75} />,
      tape: "#D6A23A",
      rotate: -2.4,
    },
    {
      title: "Alphabet of Praise",
      aside: "A to Z",
      href: "/alphabet",
      icon: <ListOrdered size={19} strokeWidth={1.75} />,
      tape: "#2F6B62",
      rotate: 1.8,
    },
    {
      title: "Themes of Praise",
      aside: "by occasion",
      href: "/type",
      icon: <Layers size={19} strokeWidth={1.75} />,
      tape: "#B23A2E",
      rotate: -1.3,
    },
    {
      title: "Chosen Hymns",
      aside: "my favorites",
      href: "/collections",
      icon: <Bookmark size={19} strokeWidth={1.75} />,
      tape: "#B5726B",
      rotate: 2.6,
    },
  ]

  return (
    <main
      className={`${display.variable} ${hand.variable} ${body.variable} relative min-h-screen overflow-hidden`}
      style={{ backgroundColor: "#FAF6EC", fontFamily: "var(--font-body)" }}
    >
      {/* faint paper grain */}
      <svg className="pointer-events-none fixed inset-0 h-full w-full opacity-[0.035]">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* ---------- HEADER ---------- */}
        <header className="mb-16">
          <div className="flex flex-wrap items-end justify-center gap-x-5 gap-y-1 text-center">
            <h1
              className="text-6xl md:text-8xl"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                color: "#211D18",
              }}
            >
              Amor Dei
            </h1>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <span
              className="text-2xl md:text-3xl"
              style={{
                fontFamily: "var(--font-hand)",
                color: "#5B4A2A",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              Ministries
            </span>
            <EighthNotes size={38} color="#A9812F" />
          </div>

          <p
            className="mt-8 text-center text-lg md:text-xl"
            style={{ fontFamily: "var(--font-hand)", color: "#7A6A45", transform: "rotate(-0.6deg)" }}
          >
            sing joyfully &nbsp;·&nbsp; in unison &nbsp;·&nbsp; from the heart

          </p>


          {/* the staff — a real structural divider, not decoration */}
          <div className="relative mx-auto mt-10 h-12 max-w-2xl">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, #C9C2AC 0px, #C9C2AC 1px, transparent 1px, transparent 11px)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
                maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              }}
            />
          </div>
        </header>

        {/* ---------- VERSE — pinned torn note ---------- */}
        <div className="mb-20 flex justify-center">
          <div
            className="relative max-w-md px-9 py-8"
            style={{
              backgroundColor: "#FFFDF6",
              clipPath: TORN_EDGE,
              boxShadow: "0 14px 30px -14px rgba(33,29,24,0.25)",
              transform: "rotate(-1.4deg)",
            }}
          >
            <WashiTape color="#D6A23A" style={{ top: "-14px", left: "36px", transform: "rotate(-8deg)" }} />
            <p
              className="text-xl leading-relaxed md:text-2xl"
              style={{ fontFamily: "var(--font-body)", fontStyle: "italic", color: "#2B2620" }}
            >
              GOD IS SPIRIT
              <br />
              Those who WORSHIP him must worship in SPIRIT and TRUTH.
            </p>
            <p
              className="mt-4 text-xl"
              style={{ fontFamily: "var(--font-hand)", color: "#A9812F", transform: "rotate(-1deg)", display: "inline-block" }}
            >
              — John 4:24
            </p>
          </div>
        </div>

        {/* ---------- SEARCH ---------- */}
        <div className="mb-24">
          <p
            className="mb-4 text-center text-2xl"
            style={{ fontFamily: "var(--font-hand)", color: "#5B4A2A", transform: "rotate(-0.8deg)" }}
          >
            let's find your hymn...
          </p>
          <div className="relative mx-auto max-w-xl pb-3">
            <HomeSearch songs={songs} />
            <WavyUnderline color="#A9812F" />
          </div>
        </div>

        {/* ---------- CATEGORIES — pinned to the board ---------- */}
        <div>
          <p
            className="mb-10 text-center text-2xl"
            style={{ fontFamily: "var(--font-hand)", color: "#5B4A2A", transform: "rotate(0.5deg)" }}
          >
            or flip through a section —
          </p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="group block focus:outline-none">
                <div
                  className="relative px-7 py-8 transition-transform duration-300 ease-out group-hover:-translate-y-2 group-focus-visible:-translate-y-2 motion-reduce:transition-none"
                  style={{
                    backgroundColor: "#FFFDF6",
                    clipPath: TORN_EDGE,
                    boxShadow: "0 10px 26px -14px rgba(33,29,24,0.22)",
                    transform: `rotate(${c.rotate}deg)`,
                  }}
                >
                  <span
                    className="absolute inset-0 transition-transform duration-300 ease-out group-hover:rotate-0"
                    style={{ transform: `rotate(${-c.rotate}deg)`, transformOrigin: "center" }}
                  >
                    <WashiTape
                      color={c.tape}
                      style={{ top: "-13px", left: "50%", marginLeft: "-32px", transform: "rotate(-5deg)" }}
                    />
                  </span>

                  <div className="relative flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${c.tape}1F`, color: c.tape }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <h3
                        className="text-xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#211D18" }}
                      >
                        {c.title}
                      </h3>
                      <p
                        className="text-lg"
                        style={{ fontFamily: "var(--font-hand)", color: "#8A7A55" }}
                      >
                        {c.aside}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <footer className="mt-24 text-center">
          <p
            className="text-2xl"
            style={{ fontFamily: "var(--font-hand)", color: "#A79470", transform: "rotate(-1deg)", display: "inline-block" }}
          >
            - - - - - - - - - -
          </p>
        </footer>
      </div>
    </main>
  )
}