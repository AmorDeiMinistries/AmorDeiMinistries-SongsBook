"use client"

import { useEffect, useState } from "react"
import { Tag, Plus, Trash2, CheckCircle, AlertCircle, Layers } from "lucide-react"

interface Category {
  id: number
  name: string
}

export default function ManageCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState("")
  const [message, setMessage] = useState("")

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/categories")
      const data = await res.json()
      setCategories(data)
    } catch {
      setMessage("Error: Failed to fetch categories")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleAdd = async () => {
    if (!newCategory.trim()) return

    try {
      const res = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newCategory,
        }),
      })

      if (!res.ok) {
        throw new Error()
      }

      setMessage("Success: Category added successfully")
      setNewCategory("")
      fetchCategories()
    } catch {
      setMessage("Error: Failed to add category")
    }
  }

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    )

    if (!confirmDelete) return

    try {
      const res = await fetch(
        `http://localhost:3000/categories/${id}`,
        {
          method: "DELETE",
        }
      )

      const data = await res.json()

      if (!res.ok) {
        setMessage(data.message || "Error: Delete failed")
        return
      }

      setMessage("Success: Category deleted successfully")
      fetchCategories()
    } catch {
      setMessage("Error: Failed to delete category")
    }
  }

  return (
    <main className="min-h-screen bg-slate-50/50 p-6 md:p-12 lg:p-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-200">
              <Layers className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Manage <span className="text-indigo-600">Categories</span>
            </h1>
          </div>
          <p className="text-slate-500">
            Define the themes and genres for your ministry's songbook.
          </p>
        </header>

        {/* Feedback Message */}
        {message && (
          <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 border animate-in fade-in slide-in-from-top-2 ${
            message.includes("Error") 
              ? "bg-red-50 border-red-100 text-red-700" 
              : "bg-emerald-50 border-emerald-100 text-emerald-700"
          }`}>
            {message.includes("Error") ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
            <span className="text-sm font-medium">{message}</span>
          </div>
        )}

        {/* Add Category Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm mb-10">
          <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">
            Create New Category
          </label>
          <div className="flex gap-3">
            <div className="relative flex-1 group">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="e.g., Worship, Hymns, Youth..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <button
              onClick={handleAdd}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-100"
            >
              <Plus size={20} />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* CATEGORIES LIST */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 ml-1">
            Existing Categories ({categories.length})
          </h3>
          
          <div className="grid gap-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-white border border-slate-200 rounded-2xl p-4 flex justify-between items-center transition-all hover:border-indigo-100 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <p className="font-semibold text-slate-700 group-hover:text-indigo-900 transition-colors">
                    {category.name}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2.5 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                  title="Delete Category"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            {categories.length === 0 && (
              <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <p className="text-slate-400 text-sm">No categories created yet.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}