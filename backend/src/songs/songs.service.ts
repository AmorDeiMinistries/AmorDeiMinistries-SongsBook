import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>,
  ) {}

  findAll() {
  return this.songsRepository.find({
    order: { title: 'ASC' },
  });
}

  create(songData: Partial<Song>) {
    const song = this.songsRepository.create(songData);
    return this.songsRepository.save(song);
  }

  update(id: number, songData: Partial<Song>) {
    return this.songsRepository.update(id, songData);
  }

  delete(id: number) {
    return this.songsRepository.delete(id);
  }

  findBySlug(slug: string) {
    return this.songsRepository.findOne({
      where: { slug },
    });
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
