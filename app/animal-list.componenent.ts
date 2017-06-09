import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalDetailComponent {
  @Input() animalList: Animal[];
  @Output() editAnimalSender = new EventEmitter;

  editAnimal(animal){
    this.editAnimalSender.emit(animal);
  }
}
