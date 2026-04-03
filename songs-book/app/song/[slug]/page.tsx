import { notFound } from "next/navigation"
import AddToCollectionButton from "@/app/components/AddToCollectionButton"
import NoCopyLyrics from "@/app/NoCopyLyrics"
import { fetchSongBySlug, fetchSongs } from "@/lib/api"

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
    <main className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 blur-[60px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 blur-[60px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            {song.title}
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="h-[2px] w-16 bg-blue-600 dark:bg-blue-400 rounded-full" />
          </div>
        </header>

        <article
          className="
          relative
          bg-white/90 dark:bg-zinc-900/70
          backdrop-blur-xl
          border border-white/60 dark:border-white/10
          rounded-[2.5rem]
          px-8 sm:px-14
          py-12 sm:py-16
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
        >
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none" />

          <NoCopyLyrics lyrics={song.lyrics} />

          <div className="mt-14 flex justify-center">
            <div className="h-[2px] w-14 bg-blue-600 dark:bg-blue-400 rounded-full" />
          </div>

          <div className="mt-10 flex justify-center">
            <AddToCollectionButton slug={song.slug} />
          </div>

          <div className="mt-14 flex flex-col items-center opacity-30">
            <p className="text-[10px] font-bold tracking-[1.2em] uppercase">
              Amen
            </p>
          </div>
        </article>

        <footer className="mt-20 text-center">
          <p className="text-xs tracking-[0.4em] opacity-30 uppercase">
            Amor Dei Ministries
          </p>
        </footer>
      </div>
    </main>
  )
}
