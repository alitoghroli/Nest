import { Module } from '@nestjs/common';
import { MathModule } from './math/math.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [MathModule, PersonModule],
})
export class AppModule {}
