import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  name: string = "ABC";

  person: any = {
    name: "",
    age: null
  }

  constructor() { }

  ngOnInit() {
  }

}
