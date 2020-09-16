import { Body, Controller, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private mathServices: MathService) {}
  @Post()
  sum(@Body('a') a: number, @Body('b') b: number): number {
    return this.mathServices.sum(a, b);
  }
}
