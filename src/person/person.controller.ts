import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  getAllPerson(): Person[] {
    return this.personService.getAllPerson();
  }

  @Post()
  createPerson(@Body() createPerson: CreatePersonDto): Person {
    return this.personService.createPerson(createPerson);
  }

  @Patch('/:id')
  updatePerson(
    @Param('id') id: string,
    @Body() person: CreatePersonDto,
  ): Person {
    console.log(typeof id);
    return this.personService.updatePerson(id, person);
  }

  @Delete('/:id')
  deletePerson(@Param('id') id: string) {
    return this.personService.deletePerson(id);
  }
}
