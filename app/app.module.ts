import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AgeGroupPipe } from './age-group.pipe'


@NgModule({
  imports: [BrowserModule,
  FormsModule,
  HttpModule],
  declarations: [ AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    AgeGroupPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
