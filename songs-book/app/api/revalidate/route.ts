import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const slug = request.nextUrl.searchParams.get('slug')

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (!slug) {
    return NextResponse.json({ message: 'Missing slug' }, { status: 400 })
  }

  if (slug === 'all') {
    revalidatePath('/all')
    revalidatePath('/alphabet')
    revalidatePath('/type')
    revalidatePath('/collections')
    return NextResponse.json({ revalidated: true, path: 'all listing pages' })
  }

  // ← ADD THIS BLOCK
  if (slug === 'categories') {
    revalidatePath('/type')
    revalidatePath('/collections')
    return NextResponse.json({ revalidated: true, path: 'category pages' })
  }
  
  if (slug.startsWith('letter-')) {
  const letter = slug.replace('letter-', '')
  revalidatePath(`/alphabet/${letter}`)
  return NextResponse.json({ revalidated: true, path: `/alphabet/${letter}` })
}

  revalidatePath(`/song/${slug}`)
  return NextResponse.json({ revalidated: true, path: `/song/${slug}` })
}