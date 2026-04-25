import { notFound } from "next/navigation"
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
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-[#0a0a0a]">

      {/* Ambient blobs — same blue/indigo as rest of app */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-400/10 dark:bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-3 sm:px-6 py-16 sm:py-24">

        {/* Header */}
        <header className="text-center mb-12">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase font-semibold text-blue-500/60 dark:text-blue-400/50 mb-5">
            Amor Dei Ministries
          </p>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-[#171717] dark:text-[#ededed]">
            {song.title}
          </h1>

          {/* Divider */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-blue-500/30 dark:bg-blue-400/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 dark:bg-blue-400/50" />
            <div className="h-px w-10 bg-blue-500/30 dark:bg-blue-400/30" />
          </div>
        </header>

        {/* Lyrics card */}
        <article className="
          relative
          rounded-3xl
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-800
          shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.08)]
          dark:shadow-[0_2px_4px_rgba(0,0,0,0.2),0_12px_40px_rgba(0,0,0,0.4)]
          overflow-hidden
        ">

          {/* Top accent line */}
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

          {/* Lyrics */}
          <div className="px-4 sm:px-10 py-12 sm:py-16">
            <NoCopyLyrics lyrics={song.lyrics} />
          </div>

          {/* Mid divider */}
          <div className="flex items-center justify-center gap-3 pb-6">
            <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-700" />
            <div className="w-1 h-1 rounded-full bg-blue-500/40" />
            <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-700" />
          </div>

          {/* Add to collection */}
          <div className="flex justify-center pb-10">
            <AddToCollectionButton slug={song.slug} />
          </div>

          {/* Amen */}
          <div className="pb-10 flex justify-center">
            <p className="font-body text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-400/60 dark:text-zinc-500/60">
              Amen
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
        </article>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-zinc-400/40 dark:text-zinc-500/40">
            © Amor Dei Ministries
          </p>
        </footer>

      </div>
    </main>
  )
}
