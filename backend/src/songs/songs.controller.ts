import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.songsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.songsService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songsService.delete(Number(id));
  }

  @Get('slug/:slug')
findBySlug(@Param('slug') slug: string) {
  return this.songsService.findBySlug(slug);
}

@Get('letter/:letter')
findByLetter(@Param('letter') letter: string) {
  return this.songsService.findByLetter(letter);
}

@Get('category/:category')
findByCategory(@Param('category') category: string) {
  return this.songsService.findByCategory(category);
}

}
