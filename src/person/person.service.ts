import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './person.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class PersonService {
  private persons: Person[] = [];
  getAllPerson(): Person[] {
    return this.persons;
  }
  createPerson(createPersonDto: CreatePersonDto): Person {
    const { firstName, lastName } = createPersonDto;
    const person: Person = {
      id: uuid(),
      firstName,
      lastName,
    };

    this.persons.push(person);
    return person;
  }
  getPersonById(id: string): Person {
    const found = this.persons.find(person => person.id === id);
    if (!found) {
      throw new NotFoundException(`person with id "${id}" Not Found!`);
    }
    return found;
  }
  updatePerson(id: string, createPersonDto: CreatePersonDto): Person {
    const { firstName, lastName } = createPersonDto;
    const found = this.getPersonById(id);
    found.firstName = firstName;
    found.lastName = lastName;
    return found;
  }
  deletePerson(id: string) {
    const found = this.getPersonById(id);
    this.persons = this.persons.filter(person => person.id !== found.id);
    return { result: 'deleted' };
  }
}
