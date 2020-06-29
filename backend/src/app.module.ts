import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThemesModule } from './themes/themes.module';
import { ExperiencesModule } from './experiences/experiences.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(), ThemesModule, ExperiencesModule],
  providers: [AppService],
})
export class AppModule {}
