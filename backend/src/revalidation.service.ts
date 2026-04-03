import { Injectable } from '@nestjs/common';

@Injectable()
export class RevalidationService {
  private readonly nextjsUrl = process.env.NEXTJS_URL;
  private readonly secret = process.env.REVALIDATION_SECRET;

  async revalidateSong(slug: string) {
    try {
      await fetch(
        `${this.nextjsUrl}/api/revalidate?secret=${this.secret}&slug=${slug}`
      );
      console.log(`Revalidated song: ${slug}`);
    } catch (error) {
      console.error(`Failed to revalidate song: ${slug}`, error);
    }
  }

  async revalidateAllSongs() {
    try {
      await fetch(
        `${this.nextjsUrl}/api/revalidate?secret=${this.secret}&slug=all`
      );
      console.log('Revalidated all songs page');
    } catch (error) {
      console.error('Failed to revalidate all songs', error);
    }
  }

  async revalidateCategories() {
  try {
    await fetch(
      `${this.nextjsUrl}/api/revalidate?secret=${this.secret}&slug=categories`
    )
    console.log('Revalidated categories pages')
  } catch (error) {
    console.error('Failed to revalidate categories', error)
  }
}

async revalidateLetter(title: string) {
  try {
    // Get first character of title to determine letter
    const firstChar = encodeURIComponent(title.trim().charAt(0))
    await fetch(
      `${this.nextjsUrl}/api/revalidate?secret=${this.secret}&slug=letter-${firstChar}`
    )
    console.log(`Revalidated letter page: ${firstChar}`)
  } catch (error) {
    console.error('Failed to revalidate letter page', error)
  }
}

}