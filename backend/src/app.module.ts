import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormOptions } from './db';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(ormOptions)],
  providers: [AppService],
})
export class AppModule {}
