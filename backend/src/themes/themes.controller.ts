import { Controller, Get } from '@nestjs/common';

import { ThemesService } from './themes.service';
import { Theme } from '../../../interfaces';

@Controller('themes')
export class ThemesController {
  constructor(private themesService: ThemesService) {}

  @Get()
  getThemes(): Promise<Theme[]> {
    return this.themesService.getThemes();
  }
}
