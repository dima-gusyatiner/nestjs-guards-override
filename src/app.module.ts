import { Module } from '@nestjs/common';

import { AuthGuardService, AuthOverrideGuardService } from './guards';
import { AppService } from './services';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    AuthOverrideGuardService,
    {
      provide: AuthGuardService,
      useClass: AuthOverrideGuardService,
    }
  ],
  exports: [
    AuthOverrideGuardService,
  ],
})
export class AppModule {}
