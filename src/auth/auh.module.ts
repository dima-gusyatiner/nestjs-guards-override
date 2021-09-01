import { Module, Provider } from '@nestjs/common';

import { AuthGuard, AuthOverrideGuard } from './guards';

export const AuthGuardProvider: Provider = {
  provide: AuthGuard,
  useClass: AuthOverrideGuard,
}

@Module({
  imports: [],
  providers: [
    AuthGuardProvider,
  ],
  exports: [
    AuthGuardProvider,
  ],
})
export class AuthModule {}
