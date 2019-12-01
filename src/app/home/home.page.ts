import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstnumber;
  secondnumber;
  result;
  constructor() {}
  sum(){
    this.result = parseInt(this.firstnumber) + parseInt(this.secondnumber);

  }
  rest(){
    this.result = parseInt(this.firstnumber) - parseInt(this.secondnumber);

  }
  mult(){
    this.result = parseInt(this.firstnumber) * parseInt(this.secondnumber);

  }
  div(){
    this.result = parseInt(this.firstnumber) / parseInt(this.secondnumber);

  }
  


}
