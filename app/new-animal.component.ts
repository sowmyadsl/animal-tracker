import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter;

  newAnimal (
    species: string,
    image: string,
    name: string,
    age: number,
    diet: string,
    location: string,
    caretakers: number,
    sex: string,
    likes: string,
    dislikes: string
  ){
    var newAnimal = new Animal(species, image, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }

}
