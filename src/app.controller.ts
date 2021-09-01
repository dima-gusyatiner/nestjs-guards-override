import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './services';
import { AuthGuardService } from './guards';

@Controller()
@UseGuards(AuthGuardService)
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
