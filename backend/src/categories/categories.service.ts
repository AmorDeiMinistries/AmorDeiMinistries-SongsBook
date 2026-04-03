import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { Song } from '../songs/song.entity';
import { RevalidationService } from '../revalidation.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    @InjectRepository(Song)
    private songRepository: Repository<Song>,

    private readonly revalidationService: RevalidationService,
  ) {}

  findAll() {
    return this.categoryRepository.find({
      order: { name: 'ASC' },
    });
  }

  async create(name: string) {
    const existing = await this.categoryRepository.findOne({
      where: { name },
    });

    if (existing) {
      throw new BadRequestException('Category already exists');
    }

    const saved = await this.categoryRepository.save({ name });

    // Revalidate category pages
    await this.revalidationService.revalidateCategories();

    return saved;
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const songsUsingCategory = await this.songRepository.count({
      where: { category: category.name },
    });

    if (songsUsingCategory > 0) {
      throw new BadRequestException(
        'Cannot delete category because songs exist in this category',
      );
    }

    await this.categoryRepository.delete(id);

    // Revalidate category pages
    await this.revalidationService.revalidateCategories();

    return { deleted: true };
  }
}