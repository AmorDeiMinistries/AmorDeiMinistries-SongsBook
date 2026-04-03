import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category } from './category.entity';
import { Song } from '../songs/song.entity';
import { RevalidationService } from '../revalidation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Song])],
  controllers: [CategoriesController],
  providers: [CategoriesService, RevalidationService],
})
export class CategoriesModule {}