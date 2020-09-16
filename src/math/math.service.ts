import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {

  sum(a:number,b:number){
    return a + b
  }
}
