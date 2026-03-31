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
      order: { createdAt: 'DESC' },
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
}