import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ThemesService } from './themes.service';
import { Theme } from './theme.entity';
import { Theme as ThemeType } from '../../../interfaces';

export const mockThemes: ThemeType[] = [
  {
    created: new Date(1),
    emoji: '🅱️',
    id: 'id',
    name: 'theme name',
    updated: new Date(1),
  },
];

describe('ThemesService', () => {
  let service: ThemesService;
  let repository: Repository<Theme>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ThemesService,
        {
          provide: getRepositoryToken(Theme),
          useFactory: jest.fn(() => ({
            find: jest.fn(() => mockThemes),
          })),
        },
      ],
    }).compile();

    service = module.get<ThemesService>(ThemesService);
    repository = module.get(getRepositoryToken(Theme));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call find on repository', async () => {
    const themes = await service.getThemes();
    expect(themes).toEqual(mockThemes);
    expect(repository.find).toHaveBeenCalledTimes(1);
    expect(repository.find).toHaveBeenCalledWith();
  });
});
