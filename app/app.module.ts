import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { EditAnimalComponent } from './edit-animal.component';


@NgModule({
  imports: [BrowserModule,
  FormsModule,
  HttpModule],
  declarations: [ AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
    EditAnimalComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
