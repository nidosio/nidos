import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Theme } from './theme.entity';
import { Theme as ThemeType } from '../../../interfaces';

@Injectable()
export class ThemesService {
  constructor(@InjectRepository(Theme) private themeRepository: Repository<Theme>) {}

  getThemes(): Promise<ThemeType[]> {
    return this.themeRepository.find();
  }
}
