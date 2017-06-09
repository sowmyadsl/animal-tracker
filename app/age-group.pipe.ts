import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "ageGroup",
  pure: false
})

export class AgeGroupPipe implements PipeTransform {
  transform(input: Animal[], subject){
    var output: Animal[] = [];
    if(subject === "young") {
      for(var i = 0; i < input.length; i++){
        if(input[i].age <= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if (subject === "mature"){
      for (var i=0; i < input.length; i++)  {
        if(input[i].age >= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
