import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormOptions } from './db';
import { ThemeModule } from './theme/theme.module';
import { ExperiencesModule } from './experiences/experiences.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(ormOptions), ThemeModule, ExperiencesModule],
  providers: [AppService],
})
export class AppModule {}
