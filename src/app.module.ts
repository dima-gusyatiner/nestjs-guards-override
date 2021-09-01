import { Module } from '@nestjs/common';

import { AuthModule } from './auth';
import { AppService } from './services';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
