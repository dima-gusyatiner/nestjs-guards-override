import { Module } from '@nestjs/common';

import { AuthGuard, AuthOverrideGuard } from './guards';
import { AppService } from './services';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: AuthGuard,
      useClass: AuthOverrideGuard,
    }
  ],
})
export class AppModule {}
