import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';
import { RevalidationService } from '../revalidation.service';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>,
    private readonly revalidationService: RevalidationService,
  ) {}

  findAll() {
    return this.songsRepository.find({
      order: { title: 'ASC' },
    });
  }

  async create(songData: Partial<Song>) {
    const song = this.songsRepository.create(songData);
    const saved = await this.songsRepository.save(song);

    // Full rebuild for new song
    await this.revalidationService.triggerFullRebuild();

    return saved;
  }

  async update(id: number, songData: Partial<Song>) {
    await this.songsRepository.update(id, songData);

    const updated = await this.songsRepository.findOne({ where: { id } });
    if (updated) {
      // Full rebuild to ensure all pages are updated
      await this.revalidationService.triggerFullRebuild();
    }

    return updated;
  }

  async delete(id: number) {
    const song = await this.songsRepository.findOne({ where: { id } });
    await this.songsRepository.delete(id);

    if (song) {
      // Full rebuild to ensure all pages are updated
      await this.revalidationService.triggerFullRebuild();
    }

    return { deleted: true };
  }

  findBySlug(slug: string) {
    return this.songsRepository.findOne({ where: { slug } });
  }

  findByLetter(letter: string) {
    return this.songsRepository
      .createQueryBuilder('song')
      .where('LOWER(TRIM(song.title)) LIKE LOWER(:letter)', {
        letter: `${letter}%`,
      })
      .orderBy('song.createdAt', 'DESC')
      .getMany();
  }

  findByCategory(category: string) {
    return this.songsRepository.find({
      where: { category },
      order: { title: 'ASC' },
    });
  }
}