import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  moduleId: module.id,
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() editAnimalSender = new EventEmitter;
  filterByageGroup: string = "allAges";
  filterBydietType: string = "allDiets";

// edits the properties of animal
  editAnimal(animal){
    this.editAnimalSender.emit(animal);
  }

  onChange(optionFromMenu) {
    this.filterByageGroup = optionFromMenu;
  }

  onChange1(optionFromMenu) {
  this.filterBydietType = optionFromMenu;
  }
}
