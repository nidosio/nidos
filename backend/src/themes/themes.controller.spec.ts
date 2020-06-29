import { Test, TestingModule } from '@nestjs/testing';

import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';
import { mockThemes } from './themes.service.spec';

describe('Themes Controller', () => {
  let controller: ThemesController;
  let themesService: ThemesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemesController],
      providers: [ThemesService],
    })
      .overrideProvider(ThemesService)
      .useValue({
        getThemes: jest.fn(() => mockThemes),
      })
      .compile();

    controller = module.get<ThemesController>(ThemesController);
    themesService = module.get<ThemesService>(ThemesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call UserService when getting all themes', () => {
    const themes = controller.getThemes();
    expect(themes).toEqual(mockThemes);
    expect(themesService.getThemes).toHaveBeenCalledTimes(1);
    expect(themesService.getThemes).toHaveBeenCalledWith();
  });
});
