import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './services';
import { AuthGuard } from './guards';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly guard: AuthGuard,
  ) {}

  @Get()
  getHello(): string {
    console.log(`AppController`, this.guard);

    return this.appService.getHello();
  }
}
