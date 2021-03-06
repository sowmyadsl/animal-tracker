import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  moduleId: module.id,
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent {
  @Input() selectedAnimal;
  @Output() finishedEditingSender = new EventEmitter;

  finishedEditing() {
    this.finishedEditingSender.emit()
  }
}
