import { Get, Controller } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('/api/test')
export class TestController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getTest();
  }
}
