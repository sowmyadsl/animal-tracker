import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "ageGroup",
    pure: false
})

export class AgeGroupPipe implements PipeTransform {
  transform(input: Animal[], args){

  }
}
