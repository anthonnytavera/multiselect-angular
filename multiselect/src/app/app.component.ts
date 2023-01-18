import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-multiselect';

  selectedOption!: any;
  optionsSelect = [
    {
      value: 2,
      name: "APRA"
    },
    {
      value: 3,
      name: "DGHySA"
    },
    {
      value: 4,
      name: "DGFyC"
    },
    {
      value: 5,
      name: "DGFyCO"
    },
    {
      value: 6,
      name: "DGFyC"
    },
    {
      value: 7,
      name: "DGPT"
    }
  ];


  onChange() {
    console.log(this.selectedOption);
  }
}
	
