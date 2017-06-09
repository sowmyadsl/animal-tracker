import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "dietType",
  pure: false
})

export class DietTypePipe implements PipeTransform {
  transform(input: Animal[], subject){
    var output: Animal[] = [];
    if(subject === "carnivore") {
      for(var i = 0; i < input.length; i++){
        if(input[i].diet === "Carnivore"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (subject === "herbivore"){
      for (var i = 0; i < input.length; i++)  {
        if(input[i].diet === "Herbivore"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (subject === "omnivore"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].diet === "Omnivore"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
