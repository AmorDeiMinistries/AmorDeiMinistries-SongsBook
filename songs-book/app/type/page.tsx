"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface Category {
  id: number
  name: string
}

export default function SongTypesPage() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/categories")
        const data = await res.json()
        setCategories(data)
      } catch (error) {
        console.error("Failed to fetch categories")
      }
    }

    fetchCategories()
  }, [])

return (

<main className="min-h-screen overflow-x-hidden">

{/* SAME BACKGROUND ENVIRONMENT */}

<div className="fixed inset-0 pointer-events-none">

<div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 blur-[140px] rounded-full"/>

<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 blur-[140px] rounded-full"/>

</div>


<div className="relative z-10 max-w-5xl mx-auto px-6 py-24">


{/* PAGE HEADER */}

<header className="mb-20 text-center flex justify-center">

<div className="relative group max-w-fit">
  
  {/* Soft Outer Glow */}
  <div className="absolute -inset-2 bg-blue-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:bg-blue-500/20"></div>

  <div className="relative px-8 py-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-2xl shadow-sm">

    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
      Themes of <span className="italic font-serif text-blue-600 dark:text-blue-500">Praise</span>
    </h1>

    <p className="mt-3 text-sm md:text-base text-slate-500 dark:text-slate-400">
      Browse hymns by their spiritual theme
    </p>

  </div>

</div>

</header>


{/* CATEGORY GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{categories.map((cat) => (

<Link
key={cat.id}
href={`/type/${encodeURIComponent(cat.name)}`}
className="group block"
>

<div className="
p-6 rounded-2xl

bg-white/80 dark:bg-zinc-900/70
backdrop-blur-xl

border border-white/60 dark:border-white/10

shadow-[0_15px_40px_rgba(0,0,0,0.08)]

transition-all duration-300

hover:-translate-y-1
hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
hover:bg-white dark:hover:bg-zinc-800
">

<h3 className="text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-blue-400">

{cat.name}

</h3>

</div>

</Link>

))}

</div>

</div>

</main>

)
}