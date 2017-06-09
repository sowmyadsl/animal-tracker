import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
animals: Animal[] = [{
      species: "Arctic Fox",
      image:"http://fennecfoxes.webs.com/evde-baykus.jpg",
      name: "Moon",
      age: 2,
      diet: "Carnivore",
      location: "Northern Trail",
      caretakers: 5,
      sex: "Female",
      likes: "Cool shade",
      dislikes: "Loud noises"
    },{
      species: "Ocelot",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/220px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg",
      name: "Prince",
      age: 4,
      diet: "Carnivore",
      location: "Tropical Rain Forest Building",
      caretakers: 6,
      sex: "Male",
      likes: "Laying in the sunshine",
      dislikes: "Toys that are not rope-based"
    },{
      species: "Northwest Black Tailed Deer",
      image:"http://www.rsmiller.net/images/BlackTailedDeer.jpg",
      name: "Tinkerbell",
      age: 8,
      diet: "Herbivore",
      location: "Northern Trail",
      caretakers: 2,
      sex: "Female",
      likes: "Delicate roots and leaves",
      dislikes: "Loud Noises"
    }
  ];

  selectedAnimal = null;

  editAnimal(animal){
    this.selectedAnimal = animal;
  }

  addAnimal(newAnimal){
    this.animals.push(newAnimal);
  }

  finishedEditing() {
   this.selectedAnimal = null;
 }
}
