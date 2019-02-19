import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['asd','asdasd','asdasd','asdasd'];
  name: string = "Sebas";
  age: number;
  adress:{
    street: string;
    city: string;
  }
  hobbies: string[];

  constructor(){
    this.age = 23;
    this.adress = {
      street: 'CRA9BSUR',
      city: 'Londres'
    };
  }
}
