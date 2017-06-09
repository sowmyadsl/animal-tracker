import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
animals: Animal[] = [
    new Animal("Arctic Fox","http://fennecfoxes.webs.com/evde-baykus.jpg","Moon",2,"Carnivore","Northern Trail",5,"Female","Cool shade","Loud Noises"),
    new Animal("Ocelot", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/220px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg","Prince",4,"Carnivore","Tropical Rain Forest Building",6,"Male","Lying in the sunshine","Toys that are rope based"),
    new Animal("Northwest Black Tailed Deer","http://www.rsmiller.net/images/BlackTailedDeer.jpg","Tinkerbell",8,"Herbivore","Northern Trail",2,"Female","Delicate roots and leaves","Loud Noises")
  ];
}

class Animal{
  constructor (public species: string,public image: string, public name: string, public age: number, public diet: string, public location: any, public caretakes: number, public sex: string, public likes: string, public dislikes: string){}
}
