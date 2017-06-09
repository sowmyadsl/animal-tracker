import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalDetailComponent {
  @Input() animals: Animal[];
  @Output() editAnimalSender = new EventEmitter;

// edits the properties of animal
  editAnimal(animal){
    this.editAnimalSender.emit(animal);
  }
}
