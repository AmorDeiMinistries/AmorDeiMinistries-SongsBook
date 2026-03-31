import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Song } from './songs/song.entity';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  const songRepo = dataSource.getRepository(Song);

  const filePath = path.join(__dirname, '../../songs-book/data/songs.json');
  const songs = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const song of songs) {
    const exists = await songRepo.findOne({
      where: { id: song.id },
    });

    if (!exists) {
      await songRepo.save(song);
      console.log(`Imported: ${song.title}`);
    }
  }

  console.log('All songs imported successfully');
  await app.close();
}

bootstrap();