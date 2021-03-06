## Animal Tracker

This app can be used to track and keep a log of animals in a local zoo.

## Screenshots:

![](https://github.com/sowmyadsl/animal-tracker/blob/master/resources/images/Screen%20Shot%202017-06-11%20at%2011.12.25%20PM.png)
![](https://github.com/sowmyadsl/animal-tracker/blob/master/resources/images/Screen%20Shot%202017-06-11%20at%2011.13.30%20PM.png)

## Planning

1. Configuration/dependencies:
* It includes all dependencies.
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Gulp](http://gulpjs.com/)

2. Specs:

| Behavior | Input | Output |
|----------|-------|--------|
|User submits a form with animal species | User inputs the , name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislikes |new species with properties populates on the page|
| User can view a list of animals logged | User submits a form | adds a new animal in a list |
| User can click on a drop down to search by a filter only young animals(less than 2 years of age) will be displayed| User can click on young animals from the menu | A list of only young animals will be displayed|
| User can click on a drop down to search by a filter only mature animals (less than 2 years of age) will be displayed| User can click on mature animals from the menu | A list of only mature animals will be displayed|
| User can edit a animals's properties | User can click on each animal to edit its name, age or caretakers | It edits the properties and displays|
| Users can filter data by diet | Users click on herbivore from menu | Only herbivore diet type animals are listed below|


3. Integration
* App component to display a list of all animals.
* Animal component to display each animal with information.
* New animal component to let user fill a form and log a new animal to the app.
* Edit animal component to let user fill a form and edit a property of animal.
* Animal-list component displays a list of all animals.
* Animal model contains the object constructor and properties which will be exported to all other components.
* age-group.pipe.ts for filtering animal data by age group
* diet-type.pipe.ts for filtering animal data by diet.

4. Components:

Entry Point:
* main.ts

Components:
* app
- app.component.ts
- app.component.html
- app.component.css
- animal.component.ts
- animal.component.html
- animal.component.css
- new-animal.component.ts
- new-animal.component.html
- new-animal.component.css
- edit-animal.component.ts
- edit-animal.component.html
- edit-animal.component.css
- animal-list.component.ts
- animal-list.component.css
- animal-list.component.html
- age-group.pipe.ts
- diet-type.pipe.ts

Model:
* animal.model.ts


5. UX/UI
  * Included bootstrap,css.

6. Polish
  * Refactor.
  * Deleted unused files

## Installation

* `git clone <repository-url>` this repository
* `cd animal-tracker`
* `npm install`
* `bower install`
* `gulp build`
* `gulp serve`ß

## Running / Development

* `gulp serve`
* Visit app at [http://localhost:3000](http://localhost:3000).

## Copyright

By Sowmya Dinavahi **2017**
