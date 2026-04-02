export type Song = {
  id: number
  title: string
  slug: string
  category: string
  lyrics: string
}

export type Category = {
  id: number
  name: string
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL!

console.log("NEXT_PUBLIC_API_URL =", process.env.NEXT_PUBLIC_API_URL)

export async function fetchSongs(): Promise<Song[]> {
  const res = await fetch(`${API_URL}/songs`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch songs")
  }

  return res.json()
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}

export async function createSong(newSong: {
  title: string
  slug: string
  category: string
  lyrics: string
}) {
  const res = await fetch(`${API_URL}/songs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSong),
  })

  if (!res.ok) {
    throw new Error("Failed to add song")
  }

  return res.json()
}

export async function updateSong(
  id: number,
  data: { title: string; lyrics: string }
) {
  const res = await fetch(`${API_URL}/songs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Update failed")
  }

  return res.json()
}

export async function deleteSong(id: number) {
  const res = await fetch(`${API_URL}/songs/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    throw new Error("Delete failed")
  }

  return res.json()
}

export async function createCategory(name: string) {
  const res = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })

  if (!res.ok) {
    throw new Error("Failed to add category")
  }

  return res.json()
}

export async function deleteCategory(id: number) {
  const res = await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Delete failed")
  }

  return data
}

export async function loginAdmin(username: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username,
      password,
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Invalid credentials")
  }

  return data
}

export async function logoutAdmin() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  })

  if (!res.ok) {
    throw new Error("Logout failed")
  }

  return res
}

export async function fetchSongBySlug(
  slug: string
): Promise<Song | undefined> {
  const res = await fetch(`${API_URL}/songs/slug/${slug}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return undefined
  }

  return res.json()
}

export async function fetchSongsByCategory(
  category: string
): Promise<Song[]> {
  const res = await fetch(`${API_URL}/songs/category/${category}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch songs by category")
  }

  return res.json()
}

export async function fetchSongsByLetter(
  letter: string
): Promise<Song[]> {
  const res = await fetch(`${API_URL}/songs/letter/${letter}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch songs by letter")
  }

  return res.json()
}
